import Phaser from 'phaser';

export default class Hourglass{

    constructor(scene, x, y, texture, countdown){
        this.scene = scene;
        this.countdown = countdown;
        this.sprite = scene.crates.create(x, y, texture);
        this.sprite.setScale(0.15);
        this.sprite.setOrigin(0, 1);
        this.sprite.refreshBody();
    }

    onCollision(){
        this.countdown.increment();
    }
}
