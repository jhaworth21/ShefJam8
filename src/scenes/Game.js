import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
    
    preload(){
        this.load.image("bg", "../../assets/Background/3layers/Background.png");
        this.load.image("mg", "../../assets/Background/3layers/Midground.png");
        this.load.image("fg", "../../assets/Background/3layers/Foreground.png");
    }

    create(){
        const bg = this.add.image("bg", "../../assets/Background/3layers/Background.png");
        bg.setScale(1.0);
        const mg = this.add.image("mg", "../../assets/Background/3layers/Midground.png");
        mg.setScale(1.0);
        const fg = this.add.image("fg", "../../assets/Background/3layers/Foreground.png");
        fg.setScale(1.0);
    }
}