import Phaser, {Textures} from 'phaser';
import MovementManager from "../control/movement";
import {add_backgrounds} from "../sprites/backgrounds";
import CountdownController from '../CountdownController';
import Player from '../sprites/player';
import Crate from "../sprites/Crate";

export default class Game extends Phaser.Scene {

   constructor() {
      super({});
      this.largest_background_offset = 1;
      this.movement_manager = new MovementManager(this);
      this.crates_group = null;
      this.crates = []
   }

   preload() {
      //loads all of the background layers from their filepaths
      this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
      this.load.image("mg", require("../..//../assets/Background/3layers/Midground.png"));
      this.load.image("fg", require("../../../assets/Background/3layers/Foreground.png"));

      // Loading crate
      this.load.image("crate", require("../../../assets/sprites/crate.png"));

      // load player
      this.load.image("player", require("../../../assets/sprites/player.png"));
      // this.load.spritesheet("player", require("../../../assets/sprites/elementals_wind_hashashin_v1.0/elementals_wind_hashashin_v1.0/wind_SpriteSheet_224x112.png"), {frameWidth:224, frameHeight:112})
      // this.load.image("player", require("../../../assets/sprites/elementals_wind_hashashin_v1.0/elementals_wind_hashashin_v1.0/wind_SpriteSheet_224x112.png"));
   }

   create() {
      add_backgrounds(this);

      //creates a label for the timer
      const timer_label = this.add.text(10, 10, "30", {fontSize: 30}).setOrigin(0,0);

      //creates a new countdown controller for the timer_label and this scene
      this.countdown = new CountdownController(this, timer_label);
      //starts the countdown with the callback gameOver
      this.countdown.start(this.gameOver.bind(this));

      // const player_sprite = this.physics.add.sprite(100,450,'player');
      this.crates_group = this.physics.add.staticGroup();
      this.player_sprite = new Player(this, 100, 450, 'player')
      const test_cate = new Crate(this, 700, 600, 'crate');

      this.physics.add.collider(this.player_sprite.sprite, this.crates_group);

   }

   update(time, delta) {

      //updates the countdown timer
      this.countdown.update();

      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
         this.movement_manager.move(-3);
      }

      if (cursors.right.isDown) {
         this.movement_manager.move(3);
      }

      if (cursors.up.isDown) {
         this.player_sprite.movePlayer();
      }

   }

   gameOver(){

   }
}
