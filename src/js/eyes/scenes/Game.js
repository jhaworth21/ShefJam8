import Phaser, { Textures } from 'phaser';

export default class Game extends Phaser.Scene {
    
    preload(){
        this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
        // this.load.image("mg", "../../assets/Background/3layers/Midground.png");
        // this.load.image("fg", "../../assets/Background/3layers/Foreground.png");
    }

    create(){
        var bg = this.add.image(0, 0, "bg")
        bg.setScale(1.0);
        // const mg = this.add.image(200, 200, "mg")
        // mg.setScale(1.0);
        // const fg = this.add.image(200, 200, "fg")
        // fg.setScale(1.0);
    }
}