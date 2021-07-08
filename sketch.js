
let Player; 
let PlayerY;
let Fader_Btn;
let Buttons = [];
let Obstacles  = [];
let BackgroundMover = [];
let GroundMover = [];


// Game Vars for change
let Gravity = -5;
let SpeedY= 1; 
let SpeedX; 
let Score; 
let GameState;
let Started;
let Width ;
let Height;
let PublicButtonRad;
let Fader_Btn_Rad;
let FontSize = 16;
let Top;
let Bottom;
let JumpBool = false;


// Photos & game assets : 
let Player_img;
let Background_img;
let Obstacle_img = [];
let Sounds = [];



/// color pallet
let Bg_Color = "#242933";
let Correct_C = "#ffffff";
let Wrong_C = "#EB3C51";
let Parent_C = "#768198";
let Bg_Graph_C= "#1D2129";
let Bg_Tone_C = "#1E222B";





//======================================================================
//                 Charmathews : the main loop : 
//======================================================================



//const fs = require("fs");

//======================================================================
//                  Variable Declerations : 
//======================================================================



//======================================================================
//                  preload+setup Declerations : 
//======================================================================



function preload() {


  //LoadSounds();
  //LoadAssets();
 

}


function setup() {
  createCanvas(displayWidth, displayHeight);
  Width = width;
  Height = height;
  createScreenSizes();
  CreateButtons();
  

}



function draw() {
  background(color(Bg_Color));

  //moveBackground();
  //moveForeground();

  ShowButtons(Obstacles);
  UpdateButtons(Obstacles);


  ShowPlayer();
  updatePlayer();


  ShowButtons(Buttons);
  UpdateButtons(Buttons);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  createScreenSizes();

}


//======================================================================
//                  input Declerations : 
//======================================================================



function mousePressed() {

  CheckButtons(Buttons);
  CheckHover(Buttons);

}

function keyPressed() {

  if(keyCode == 32) // space button was pressed 
    Jump();

}


function keyDown() {
  if (keyIsDown(SHIFT))
    return;
}

function keyUp() {


}

