//Variáveis tipo let nomeDaVar;

let posX, posY;
let velX, velY;
let padWidth, padHeight;
let diamBall;
let points;

function setup() { //código que só corre uma vez



  ///Não Apagar para Baixo até <<<
  var canvasDiv = document.getElementById('ex1');
  var width = canvasDiv.offsetWidth;
  var sketchCanvas = createCanvas(width,width*.75);
  let numDiv;
  console.log(sketchCanvas);
  sketchCanvas.parent('ex1');
  ///<<< Não fica a faltar createCanvas
  posX = random(width);
  posY = 30;
  vel = 5;
  velX = vel;
  velY = vel;
  padWidth = 80;
  padHeight = 8;
  diamBall = 15;
  points=0;


}

function draw() { //código que corre em loop
  //desenha
  background(252, 186, 3);

  fill(0)
  text(points,30,60);
  posX = posX + velX;
  posY = posY + velY;
  noFill();
	stroke(255);
  strokeWeight(3);
  ellipse(posX,posY,diamBall);
  rectMode(CENTER);
  rect(mouseX,height-10,padWidth,padHeight);
  textSize(50);

  //calcula
  if (posX-diamBall/2 <= 0 || posX+diamBall/2 >= width) {
    velX = velX*-1;
  }
  if (posY-diamBall/2 <= 0) {
    velY = velY*-1;
  }

  if (posY+diamBall/2 >= height){
    print("");
    velX = 0;
    velY = 0;
    points = "";
    fill(0)
    textSize(80);
    textAlign(CENTER);
    text('LOSER!! TRY AGAIN', width/2, height/2);
  }

  if (velX != 0 && posX >= mouseX-padWidth/2 && posX <= mouseX+padWidth/2 && posY+diamBall/2 >= height-10-padHeight/2){
    velY = -random(vel-3,vel);
    velX =random(-vel,vel);
    points++;
  }
}
