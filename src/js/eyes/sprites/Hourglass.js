import Phaser from 'phaser';

export default class Hourglass{

    constructor(scene, x, y, texture, countdown){
        this.scene = scene;
        this.countdown = countdown;
        this.sprite = scene.physics.add.sprite(x, y, texture)
        this.scene.movement_manager.foreground.push(this)
        this.sprite.setScale(0.15);
        this.sprite.setOrigin(0, 1);
        this.sprite.setCollideWorldBounds(true)
    }

    onCollision(){
        this.countdown.increment();
        // this.sprite.destroy();
    }
}
