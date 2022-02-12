import * as PIXI from 'pixi.js'
import { Renderer } from 'pixi.js';

//creates the application
const app = new PIXI.Application({width: window.innerWidth,height: window.innerHeight, resizeTo: window});
//adds the appview to the document
document.body.appendChild(app.view);

//sets the width to be the width of the window
var width = window.innerWidth;
//sets the height to be the height of the window
var height = window.innerHeight;

var renderer = PIXI.autoDetectRenderer(width, height, {view:document.getElementById("game-canvas")});

const bg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Background.png"));
bg = new PIXI.TilingSprite(bg_texture, width, height);

// bg.position.x = 0;
// bg.position.y = height-750;

bg.tilePosition.x = 0;
bg.tilePosition.y = height-750;

app.stage.addChild(bg);


const mg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Midground.png"));
mg = new PIXI.TilingSprite(mg_texture, width, height);

// mg.position.x = 0;
// mg.position.y = height-750;

mg.tilePosition.x = 0;
mg.tilePosition.y = height-750;

app.stage.addChild(mg);

const fg_texture = PIXI.Texture.from(require("../../assets/Background/3layers/Foreground.png"));
fg = new PIXI.TilingSprite(fg_texture, width, height);

// fg.position.x = 0;
// fg.position.y = height-750;

fg.tilePosition.x = 0;
fg.tilePosition.y = height-750;

app.stage.addChild(fg);

// renderer.render(app.stage);
requestAnimationFrame(update);

/**
 * Updates the background and then renders it to the screen
 */
function update(){

    //moves the position of all background layers
    bg.tilePosition.x -= 0.3;
    mg.tilePosition.x -= 0.6;
    fg.tilePosition.x -= 0.9;

    //re-renders the stage
    renderer.render(app.stage);

    //calls the update function again
    requestAnimationFrame(update);
}