
function setup() {
  createCanvas(400,400);
  wall1 = createSprite(200,0,400,10);
  wall1.shapeColor = "red";
  wall2 = createSprite(200,400,400,10);
  wall2.shapeColor = "lightblue";
  wall3 = createSprite(0,200,10,400);
  wall3.shapeColor = "violet";
  wall4 = createSprite(400,200,10,400);
  wall4.shapeColor = "green";
  wall5 = createSprite(200,15,400,5);
  wall5.shapeColor = "pink";
  wall6 = createSprite(200,385,400,5);
  wall6.shapeColor = "yellow";
  wall7 = createSprite(15,200,5,400);
  wall7.shapeColor = "indigo";
  wall8 = createSprite(385,200,5,400);
  wall8.shapeColor = "blue";
  wall9 = createSprite(200,130,400,5);
  wall9.shapeColor = "white";
  wall10 = createSprite(200,270,400,5);
  wall10.shapeColor = "brown";
  goal1 = createSprite(200,28,100,20);
  goal1.shapeColor = "aqua";
  goal2 = createSprite(200,372,100,20);
  goal2.shapeColor = "lightgreen";
  player1 = createSprite(200,50,50,10);
  player1.shapeColor = "red";
  player2 = createSprite(200,350,50,10);
  player2.shapeColor = "cyan";
  striker = createSprite(200,200,10,10);
  striker.shapeColor = "pink"
  gameState = "serve";
  player1_score = 0;
  player2_score = 0;
}

function draw() 
{
  background(30);

  stroke("red");
  for(var i = 0; i<400; i = i + 20) {
    line(i,200,i+10,200)
  }
  if(gameState==="serve") {
    textSize(18);
    fill("red");
    text("PRESS SPACE TO STRIKE.",120,180);
    player1.x = 200;
    player1.y = 50;

  }
  text(player1_score,35,185);
  text(player2_score,35,225);

  if(keyDown("space")&&gameState==="serve") {
    striker.velocityX = 7;
    striker.velocityY = 7;
    gameState = "play";

  }
  player1.x = striker.x;
  if(keyDown("left")) {
    player2.x -=10;
  }
  if(keyDown("right")) {
    player2.x +=10;
  }
  if(keyDown("up")) {
    if(player2.y>325) {
      player2.y -=10;
    }

  }

  if(keyDown("down")) {
    player2.y +=10
    
  }
  striker.bounceOff(player1);
  striker.bounceOff(player2);
  striker.bounceOff(wall5);
  striker.bounceOff(wall6);
  striker.bounceOff(wall7);
  striker.bounceOff(wall8);
  drawSprites();
  player1.bounceOff(wall7);
  player1.bounceOff(wall8);
  player2.bounceOff(wall7);
  player2.bounceOff(wall8);
  if(striker.isTouching(goal1)||striker.isTouching(goal2)) {
    if(striker.isTouching(goal1)) {
      player2_score+=1;
    }
    if(striker.isTouching(goal2)) {
      player1_score+=1;
    }
    striker.x = 200;
    striker.y = 200;
    striker.velocityX = 0;
    striker.velocityY = 0;
  }
  if(player1_score===5||player2_score===5) {
    gameState = "end";
    text("gameOver",170,160);
    text("press R to restart",150,180);
    player2.x = 200;
    player2.y = 350;
    player1.x = 200;
    player1.y = 50;
  }
  if(keyDown("r")&&gameState === "end") {
    player1_score = 0;
    player2_score = 0;
    gameState = "serve";

  }

}




