import Phaser, {Textures} from 'phaser';
import MovementManager from "../control/movement";
import {add_backgrounds} from "../sprites/backgrounds";
import {getConnection} from "../host";


export default class GameOver extends Phaser.Scene {

    constructor() {
        super({});
        this.largest_background_offset = 1;
        this.movement_manager = new MovementManager(this);

    }

    preload() {
        //loads all of the background layers from their filepaths
        this.load.image("bg", require("../../../assets/Background/3layers/Background.png"));
        this.load.image("mg", require("../..//../assets/Background/3layers/Midground.png"));
        this.load.image("fg", require("../../../assets/Background/3layers/Foreground.png"));
    }

    create() {
        add_backgrounds(this);
        const gameOverText = this.add.text(this.scale.width / 2, this.scale.height / 2, "GAME OVER", {fontSize: 100}).setOrigin(0.5, 0.5);

        getConnection().send({
            "type": "game_end",
            "data": {}
        })
    }
}