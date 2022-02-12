import Phaser from 'phaser'
import TitleScreen from './scenes/TitleScreen';
import Game from './scenes/game';

const config = {
    width: window.innerWidth,
    height: window.innerHeight,
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
