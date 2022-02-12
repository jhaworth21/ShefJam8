import {GameObjects} from 'phaser';

export default class MovementManager {

   constructor(scene) {
      this.background = [];
      this.midground = [];
      this.foreground = [];
      this.scene = scene;
   }

   move(vector) {
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
         }
      ]
      for (const layer of layer_move_rates) {
         for (const sprite of layer.layer) {
            if (sprite instanceof GameObjects.TileSprite) {
               sprite.tilePositionX += (vector * layer.rate);
            }

            if (sprite instanceof GameObjects.Sprite) {
               sprite.x += (vector * layer.rate);
            }
         }
      }
   }
}
