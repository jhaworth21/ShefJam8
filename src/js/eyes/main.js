import Phaser from 'phaser'
import TitleScreen from '../../scenes/TitleScreen';
import Game from '../../scenes/game';

const config = {
    width: 800,
    height: 500,
    type: Phaser.AUTO
    // scene: {
    //     preload: preload,
    //     create: create,
    //     update: update
    // }
};

const game = new Phaser.Game(config);

game.scene.add('titleScreen', TitleScreen);
// game.scene.start('titleScreen');

game.scene.add('game', Game);
game.scene.start('game');

// function preload ()
// {
//     // this.load.image("bg", "../../assets/Background/3layers/Background.png");
//     // this.load.image("mg", "../../assets/Background/3layers/Midground.png");
//     // this.load.image("fg", "../../assets/Background/3layers/Foreground.png");
// }

// function create ()
// {
//     // const width = this.scale.width;
//     // const height = this.scale.height;

//     // this.add.image(0, height-750, "bg");
//     // this.add.image(0, height-750, "mg");
//     // this.add.image(0, height-750, "fg");
// }

// function update ()
// {
// }