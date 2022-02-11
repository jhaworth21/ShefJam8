import * as PIXI from 'pixi.js'
import { Renderer } from 'pixi.js';

const app = new PIXI.Application();

stage = new PIXI.Container();

var width = document.getElementById("game-canvas").width;
var height = document.getElementById("game-canvas").height;

renderer = PIXI.autoDetectRenderer(width, height, {view:document.getElementById("game-canvas")})


var bg_texture = PIXI.Texture.from("src\assets\Background\Free Pixel Art Forest\Free Pixel Art Forest\Preview\Background.png");
bg = new PIXI.Sprite(bg_texture);

bg.position.x = 0;
bg.position.y = 0;

stage.addChild(bg);

renderer.render(stage);

console.log(app);