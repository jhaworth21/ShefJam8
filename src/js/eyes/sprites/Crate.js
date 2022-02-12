import Phaser from 'phaser';

export default class Crate {

    constructor(scene, x, y, texture){
        this.scene = scene;
        this.sprite = scene.crates_group.create(x, y, texture);
        this.scene.movement_manager.foreground.push(this)
        this.sprite.setOrigin(0, 1);
        this.sprite.refreshBody();
    }
}
