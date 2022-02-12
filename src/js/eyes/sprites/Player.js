import Phaser from 'phaser';

export default class Player {

    constructor(scene, x, y, texture){
        this.scene = scene;
        this.sprite = scene.physics.add.sprite(x, y, texture)
        this.sprite.setOrigin(0,1);
        this.sprite.setBounce(0.2)
        this.sprite.setCollideWorldBounds(true)
    }
}
