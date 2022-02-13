import Phaser from 'phaser';

export default class Crate {

    constructor(scene, x, y, texture){
        this.scene = scene;
        this.sprite = scene.crates_group.create(x, y, texture);
        this.sprite.setScale(1.5);
        this.scene.movement_manager.obstacles.push(this)
        this.sprite.setOrigin(0, 1);
        this.sprite.refreshBody();
    }
}
