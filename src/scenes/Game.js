import Phaser from 'phaser';

export default class Game extends Phaser.Scene {
    
    preload(){
        this.load.image("bg", "../../assets/Background/3layers/Background.png");
        this.load.image("mg", "../../assets/Background/3layers/Midground.png");
        this.load.image("fg", "../../assets/Background/3layers/Foreground.png");
    }

    create(){
        this.add.image("bg", "../../assets/Background/3layers/Background.png");
        this.add.image("mg", "../../assets/Background/3layers/Midground.png");
        this.add.image("fg", "../../assets/Background/3layers/Foreground.png");
    }
}