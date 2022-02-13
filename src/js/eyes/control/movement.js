import {GameObjects} from 'phaser';
import Crate from "../sprites/Crate";
import Hourglass from '../sprites/Hourglass';

let velocity = 0;
let pending_jump = false;

function set_velocity(v) {
   velocity = v;
}

function set_pending_jump(pending) {
   pending_jump = pending;
}

export {set_velocity, set_pending_jump, pending_jump}

export default class MovementManager {

   constructor(scene) {
      this.background = [];
      this.midground = [];
      this.foreground = [];
      this.static = [];
      this.obstacles = [];
      this.scene = scene;
      this.view_port_left = 0;
   }

   move() {
      const vector = velocity * 4;

      const layer_move_rates = [
         {
            layer: this.background,
            rate: 0.5
         },
         {
            layer: this.midground,
            rate: 0.7
         },
         {
            layer: this.foreground,
            rate: 1
         },
         {
            layer: this.static,
            rate: 0
         },
         {
            layer: this.obstacles,
            rate: 1
         }

      ];

      // Checking if the player is going to collide with an obstacle

      // First we store all the obstacle positions
      const old_obstacle_positions = this.obstacles.map(obstacle => {
         return {
            x: obstacle.sprite.x,
            y: obstacle.sprite.y
         };
      });

      // Then we move all the obstacles
      for (const sprite of this.obstacles) {
         if (sprite instanceof Crate) {
            sprite.sprite.x -= vector;
            sprite.sprite.refreshBody();
         }
      }

      // Then we check if the player is going to collide with an obstacle
      const has_player_collided = this.scene.physics.overlap(this.scene.player_sprite.sprite, this.scene.crates_group);

      // If the player has collided, we move the obstacles back to their original positions
      if (has_player_collided) {
         for (let sprite_index=0; sprite_index<this.obstacles.length; sprite_index++) {
            const sprite = this.obstacles[sprite_index];
            const old_position = old_obstacle_positions[sprite_index];
            sprite.sprite.x = old_position.x;
            sprite.sprite.y = old_position.y;
            sprite.sprite.refreshBody();
         }

         return
      }

      for (const layer of layer_move_rates) {
         for (const sprite of layer.layer) {
            if (layer.layer === this.obstacles) {
               continue;
            }
            if (sprite instanceof GameObjects.TileSprite) {
               sprite.tilePositionX += (vector * layer.rate);
            }

            if (sprite instanceof GameObjects.Sprite) {
               sprite.x -= (vector * layer.rate);
            }

            // if (sprite instanceof Hourglass) {
            //    sprite.sprite.x -= (vector * layer.rate);
            // }
         }
      }

      this.view_port_left += vector
      this.scene.structure_spawner.check_for_structure_spawn()
   }
}
