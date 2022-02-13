// import Phaser from 'phaser';

// export default class Hourglass{

//     // constructor(scene, x, y, texture, countdown){
//     //     this.scene = scene;
//     //     this.countdown = countdown;
//     //     this.sprite = scene.hourglass_group.create(x, y, texture, countdown)
//     //     //this.sprite = scene.physics.add.sprite(x, y, texture)
//     //     this.scene.movement_manager.foreground.push(this)
//     //     this.sprite.setScale(0.1);
//     //     this.sprite.setOrigin(0, 1);
//     //     //this.sprite.setVelocityY(-0.00100);
//     //     //this.sprite.setCollideWorldBounds(false)
//     // }

//     // hourglassSpawn(x, scene){
//     //     this.hourglass = new Hourglass(scene, x, 0, "hourglass", scene.countdown);
//     //  }


//     constructor(scene, x, y, texture){
//         this.scene = scene;
//         this.sprite = scene.hourglass_group.create(x, y, texture);
//         this.sprite.setScale(1.5);
//         this.scene.movement_manager.obstacles.push(this)
//         this.sprite.setOrigin(0, 1);
//         this.sprite.refreshBody();
//     }

//     hourglassSpawn(x, scene, texture){
//          this.hourglass = new Hourglass(scene, x, 500, texture);
//     }
// }
