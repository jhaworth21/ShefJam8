import Phaser, {Textures} from 'phaser';
import MovementManager from "../control/movement";
import {add_backgrounds} from "../sprites/backgrounds";

export default class Game extends Phaser.Scene {

   constructor() {
      super({});
      this.largest_background_offset = 1;
      this.movement_manager = new MovementManager(this);
   }

   preload() {
      this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
      this.load.image("mg", require("../..//../assets/Background/3layers/Midground.png"));
      this.load.image("fg", require("../../../assets/Background/3layers/Foreground.png"));
   }

   create() {
      add_backgrounds(this);
   }

   update(time, delta) {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
         this.movement_manager.move(-3);
      }

      if (cursors.right.isDown) {
         this.movement_manager.move(3);
      }
   }
}
