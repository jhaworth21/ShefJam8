import Stairs from "./Stairs";
import XStairs from "./XStairs";
import Stairs1 from "./Stairs1";
import Stairs2 from "./Stairs2";
import Stairs3 from "./Stairs3";
import Stairs4 from "./Stairs4";
import Stairs5 from "./Stairs5";
import Stairs6 from "./Stairs6";
import Stairs7 from "./Stairs7";
import Stairs8 from "./Stairs8";
import Game from "../../scenes/game";

const STRUCTURES = [
    Stairs,
    Stairs1,
    Stairs2,
    Stairs3,
    Stairs4,
    Stairs5,
    Stairs6,
    Stairs7,
    Stairs8,
    XStairs
]

function randomIntFromInterval(min, max) { // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export default class StructureSpawner {
    constructor(scene) {
        this.scene = scene;
        this.next_structure_spawn = null;
    }

    check_for_structure_spawn() {
        if (this.next_structure_spawn === null) {
            this.next_structure_spawn = this.scene.scale.width - 200;
        }

        const view_port_right_x = this.scene.scale.width + this.scene.movement_manager.view_port_left;
        if (view_port_right_x >= this.next_structure_spawn) {
            //this.scene.hourglass.hourglassSpawn(this.scene.scale.width - 40, this.scene, "hourglass")
            this.spawn_structure(this.scene.scale.width);
            this.scene.countdown.increment();
            this.next_structure_spawn += this.scene.scale.width + randomIntFromInterval(30, 50);
        }
    }

    spawn_structure(x) {
        const random_structure = STRUCTURES[randomIntFromInterval(0, STRUCTURES.length - 1)];
        console.log("spawning structure " +random_structure)
        new random_structure(this.scene, x);
    }
}