import Phaser, { Scene } from 'phaser';

export default class Player {

    constructor(scene, x, y, texture){
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, texture)
        this.sprite.setOrigin(0,1);
        this.sprite.setBounce(0.2)
        this.sprite.setScale(1.75);
        this.sprite.setCollideWorldBounds(true)
    }

    movePlayer(){
        this.sprite.setVelocityY(-250);
        
    }

}
