var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

var bg, redS, greenS, gold, mouse ,rock ,rSnake ,gSnake;

function preload(){
redS=loadAnimation("images/redSnake1.png","images/redSnake2.png","images/redSnake3.png","images/redSnake4.png");
greenS=loadAnimation("images/greenSnake1.png","images/greenSnake2.png","images/greenSnake3.png","images/greenSnake4.png");
gold=loadImage("images/gold.png");
bg=loadImage("images/backGround.png");
mouse=loadImage("images/mouse.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;

  obstacles=createGroup();
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i=0;i<5;i++){
 
  w=random(200,90);
  h=random(-height*6,height-300);
  rock=createSprite(w,h);
  rock=loadImage("images/rock.png");
  obstacles.add(rock);
}
}


function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
    clear();
    game.play();
   }
   if (gameState === 2) {
     console.log("End");
   }}
 
  
