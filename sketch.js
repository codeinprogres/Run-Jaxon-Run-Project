
var boy, background, backgroundImg, RunnerImg, leftEdge, rightEdge;

function preload(){
   RunnerImg = loadAnimation("Runner-1.png", "Runner-2.png");
   backgroundImg = loadImage("path.png");
}

function setup(){
  createCanvas(400,400);
  background = createSprite(400,400,20,20);
  background.addImage(backgroundImg);
  background.x = 200;
  background.velocityY = 4;
  background.scale = 1.2;

  boy = createSprite(20,20,200,300);
  boy.x = 200;
  boy.y = 275;
  boy.addAnimation("running", RunnerImg);
  boy.scale = 0.1;

  rightEdge = createSprite(20,400,20,400);
  rightEdge.x = 35;
  rightEdge.y = 200;
  rightEdge.visible = false;

  leftEdge = createSprite(20,400,20,400);
  leftEdge.x = 360;
  leftEdge.y = 200;
  leftEdge.visible = false;
}

createEdgeSprites();

function draw() {
  drawSprites();

  if(background.y > 400){
    background.y = background.width/2;
  }

 boy.x = World.mouseX; 

boy.bounceOff(rightEdge);
boy.bounceOff(leftEdge);

}
