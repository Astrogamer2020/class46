var databasehome;
var gamestate=0;
var allPlayers
var player1,player2;
var playercount=0;
var form,player,game;
var ground;
function preload(){
  jedi = loadImage("jedi.png");
  jedishield = loadImage("jedi shield.png");

  sith = loadImage("sith.png");
  sithshield = loadImage("sith shield.png");
}

function setup(){
    createCanvas(1200,800);
    databasehome=firebase.database();
    game=new Game();
  game.getState();
  game.start();
   
}

function draw(){
    background("white");
 if(playercount===2){
   game.update(1);
 }
 if(gamestate===1){
   clear();
   game.play();
 }
 if(gamestate===2){
   game.end();
 }

if(keyDown("DOWN_ARROW")){
 jedishield1=createSprite(500,200,30,30);
 jedishield1.addImage(jedishield);
}

if(keyDown("UP_ARROW")){
  jedishield1.visible=false
}
  


   // drawSprites();
}

