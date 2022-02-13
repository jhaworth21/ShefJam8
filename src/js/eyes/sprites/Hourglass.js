import Phaser from 'phaser';

export default class Hourglass{

    constructor(scene, x, y, texture, countdown){
        this.scene = scene;
        this.countdown = countdown;
        this.sprite = scene.physics.add.sprite(x, y, texture)
        this.scene.movement_manager.foreground.push(this)
        this.sprite.setScale(0.1);
        this.sprite.setOrigin(0, 1);
        this.sprite.setVelocityY(-0.00100);
        this.sprite.setCollideWorldBounds(false)
    }

    onCollision(){
        this.countdown.increment();
        // this.sprite.destroy();
    }

    hourglassSpawn(x, scene){
        this.hourglass = new Hourglass(scene, x, 0, "hourglass", scene.countdown);
     }
}
