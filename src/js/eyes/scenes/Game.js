import Phaser, {Textures} from 'phaser';

export default class Game extends Phaser.Scene {

   preload() {
      this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
      // this.load.image("mg", "../../assets/Background/3layers/Midground.png");
      // this.load.image("fg", "../../assets/Background/3layers/Foreground.png");
   }

   create() {
      const width = this.scale.width;
      const height = this.scale.height;

      this.add.image(0, height, "bg").setOrigin(0, 1).setScale();
      // const mg = this.add.image(200, 200, "mg")
      // mg.setScale(1.0);
      // const fg = this.add.image(200, 200, "fg")
      // fg.setScale(1.0);
   }
}
