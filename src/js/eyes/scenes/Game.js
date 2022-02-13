import Phaser, {Textures} from 'phaser';
import MovementManager from "../control/movement";
import {add_backgrounds} from "../sprites/backgrounds";
import Player from '../sprites/player';
import Crate from "../sprites/Crate";
import Hourglass from '../sprites/Hourglass';
import GameOver from './GameOver'
import CountdownController from '../CountdownController';

export default class Game extends Phaser.Scene {

   constructor() {
      super({});
      this.largest_background_offset = 1;
      this.movement_manager = new MovementManager(this);
      this.crates_group = null;
      this.hourglass = null;
      this.countdown = null;
      this.timer_label = "00";
   }

   preload() {
      //loads all of the background layers from their filepaths
      this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
      this.load.image("mg", require("../..//../assets/Background/3layers/Midground.png"));
      this.load.image("fg", require("../../../assets/Background/3layers/Foreground.png"));

      // Loading crate
      this.load.image("crate", require("../../../assets/sprites/crate.png"));

      //
      this.load.image("hourglass", require("../../../assets/sprites/hourglass/singe-hour-glass.png"));

      // load player
      this.load.image("player", require("../../../assets/sprites/player.png"));

      //load ground
      //this.load.image("g", require("../../../assets/Background/3layers/ground.png"));
      // this.load.spritesheet("player", require("../../../assets/sprites/elementals_wind_hashashin_v1.0/elementals_wind_hashashin_v1.0/wind_SpriteSheet_224x112.png"), {frameWidth:224, frameHeight:112})
      // this.load.image("player", require("../../../assets/sprites/elementals_wind_hashashin_v1.0/elementals_wind_hashashin_v1.0/wind_SpriteSheet_224x112.png"));
   }

   create() {
      add_backgrounds(this);

      //creates a label for the timer
      const timer_label = this.add.text(10, 10, "10", {fontSize: 30}).setOrigin(0, 0);
      this.countdown = new CountdownController(timer_label);
      this.countdown.start();

      // const player_sprite = this.physics.add.sprite(100,450,'player');

      this.player_sprite = new Player(this, this.scale.width / 2, 0, 'player');


      this.crates_group = this.physics.add.staticGroup();
      const test_crate = new Crate(this, 700, 670, 'crate');
      this.physics.add.collider(this.player_sprite.sprite, this.crates_group);

      // this.ground = this.physics.add.staticGroup();
      // this.ground.create(200, this.scale.height, 'g').setOrigin(0,1).setScale(2, 0.01);
      // this.physics.add.collider(this.player_sprite.sprite, this.ground);

      // var groundheight = (1000 * (this.cameras.main.width/1080))
      var groundheight = 0.92 * this.scale.height;

      console.log(groundheight)

      this.ground_group = this.physics.add.staticGroup();
      var rect = this.ground_group.create(0, groundheight, null);

      rect.body.setSize(5000000, 0)
      rect.setOrigin(0,0) // set the size of the rectangle
      this.physics.add.collider(this.player_sprite.sprite, rect);

      this.hourglass = new Hourglass(this, 800, 0, "hourglass", this.countdown);
      this.physics.add.overlap(this.hourglass.sprite, this.player_sprite.sprite, () => {
         this.countdown.increment();
         this.hourglass.sprite.destroy();
      });
      this.physics.add.collider(this.hourglass.sprite, rect);
   }

   update(time, delta) {
      //updates the countdown timer
      this.countdown.update();

      const cursors = this.input.keyboard.createCursorKeys();

      console.log(this.countdown.remaining_time);

      if(this.countdown.remaining_time <= 0){
         this.gameOver()
      }

      if (cursors.left.isDown) {
         this.movement_manager.move(-3);
      }

      if (cursors.right.isDown) {
         this.movement_manager.move(3);
      }

      if (cursors.up.isDown && this.player_sprite.sprite.body.touching.down) {
         this.player_sprite.movePlayer();
      }

   }

   gameOver() {
      var camera = this.cameras.main
      // camera.shake(250,0.05, false, 0)
      camera.shake(250)

      setTimeout(() => {
         this.scene.add('GameOver', GameOver)
         this.scene.stop('game', Game)
         this.scene.start('GameOver')
      }, 500)
   }
}
