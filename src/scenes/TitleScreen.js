import Phaser from 'phaser';

export default class TitleScreen extends Phaser.Scene {
    preload(){

    }

    create(){
        this.add.text(250, 250, "YEET");
    }
}