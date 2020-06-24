var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;
var allPlayers;

var drawing = [];
var dbDrawing = [];


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}



function draw(){

  if(playerCount === 2){
    game.update(1);
    //form.display();
  }

  if(gameState === 1){
    clear();
    game.play();
    //form.hide();
  
  }
}

function mouseDragged(){
  var point = {x: mouseX, y: mouseY}
  drawing.push(point);
  var drawingRef = database.ref('drawing');
  drawingRef.set({'d': drawing});
}

  function readData(){
    database.ref('drawing/').on("value",(data)=>{
        dbDrawing = data.val().d
    })
  } 

 




