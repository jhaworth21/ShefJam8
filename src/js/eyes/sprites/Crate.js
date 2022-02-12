import Phaser from 'phaser';

export default class Crate {

    constructor(scene, x, y, texture){
        this.scene = scene;
        this.sprite = scene.crates.create(x, y, texture);
        this.sprite.setOrigin(0, 1);
        this.sprite.refreshBody();
    }
}
