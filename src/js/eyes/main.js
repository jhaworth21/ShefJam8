import Phaser from 'phaser'
import Game from './scenes/game';

const width = window.innerWidth;
const height = window.innerHeight;

const config = {
    width: width,
    height: height,
    type: Phaser.AUTO,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
    
};

const game = new Phaser.Game(config);

game.scene.add('game', Game);
game.scene.start('game');


