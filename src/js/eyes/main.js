import * as PIXI from 'pixi.js'
import { Renderer } from 'pixi.js';

const app = new PIXI.Application({width: window.innerWidth,height: window.innerHeight, resizeTo: window});
document.body.appendChild(app.view);
// stage = new PIX  .Container();

// var width = document.getElementById("game-canvas").width;
var width = window.innerWidth;
// var height = document.getElementById("game-canvas").height;
var height = window.innerHeight;

var renderer = PIXI.autoDetectRenderer(width, height, {view:document.getElementById("game-canvas")});

const bg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Background.png"));
bg = new PIXI.Sprite(bg_texture);

bg.position.x = 0;
bg.position.y = height-750;
bg.width = width;
bg.height = height;

app.stage.addChild(bg);


const mg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Midground.png"));
mg = new PIXI.Sprite(mg_texture);

mg.position.x = 0;
mg.position.y = height-750;
mg.width = width;
mg.height = height;

app.stage.addChild(mg);

const fg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Foreground.png"));
fg = new PIXI.Sprite(fg_texture);

fg.position.x = 0;
fg.position.y = height-750;
fg.width = width;
fg.height = height

app.stage.addChild(fg);

// stage.addChild(bg);
// stage.addChild(mg);

renderer.render(app.stage);

console.log(app);