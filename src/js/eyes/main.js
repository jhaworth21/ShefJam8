import * as PIXI from 'pixi.js'
import { Renderer } from 'pixi.js';

const app = new PIXI.Application({width: window.innerWidth,height: window.innerHeight, resizeTo: window});
document.body.appendChild(app.view);
// stage = new PIX  .Container();

// var width = document.getElementById("game-canvas").width;
var width = window.innerWidth;
// var height = document.getElementById("game-canvas").height;
var height = window.innerHeight;

renderer = PIXI.autoDetectRenderer(width, height, {view:document.getElementById("game-canvas")});

const bg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Background.png"));
bg = new PIXI.Sprite(bg_texture);

const mg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Midground.png"));
mg = new PIXI.Sprite(mg_texture);

bg.position.x = 0;
bg.position.y = height-750;

bg.width = window.innerWidth;

mg.position.x = 0;
mg.position.y = height-750;
mg.width = window.innerWidth;

app.stage.addChild(bg);
app.stage.addChild(mg);

// stage.addChild(bg);
// stage.addChild(mg);

renderer(stage);

console.log(app);