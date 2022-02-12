import Phaser, {Textures} from 'phaser';

export default class Game extends Phaser.Scene {

   constructor() {
      super({});
      this.largest_background_offset = 1;
   }

   preload() {
      this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
      this.load.image("mg", require("../..//../assets/Background/3layers/Midground.png"));
      this.load.image("fg", require("../../../assets/Background/3layers/Foreground.png"));
   }

   create() {
      const height = window.innerHeight;
      const width = window.innerWidth;

      this.bg = this.add.tileSprite(0, height, 1080, 1080, "bg").setOrigin(0, 1);
      let scaleX = this.cameras.main.width / this.bg.width;
      this.bg.setScale(scaleX);

      this.mg = this.add.tileSprite(0, height, 1080, 1080, "mg").setOrigin(0, 1);
      this.mg.setScale(scaleX);

      this.fg = this.add.tileSprite(0, height, 1080, 1080, "fg").setOrigin(0, 1);
      this.fg.setScale(scaleX);

      // const mg = this.add.image(200, 200, "mg")
      // mg.setScale(1.0);
      // const fg = this.add.image(200, 200, "fg")
      // fg.setScale(1.0);
   }

   update(time, delta) {
      const cursors = this.input.keyboard.createCursorKeys();

      if (cursors.left.isDown) {
         this.bg.tilePositionX -= 1;
         this.mg.tilePositionX -= 2;
         this.fg.tilePositionX -= 3;
      } else if (cursors.right.isDown) {
         this.bg.tilePositionX += 1;
         this.mg.tilePositionX += 2;
         this.fg.tilePositionX += 3;
      }
   }
}
