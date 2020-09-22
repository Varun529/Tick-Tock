var fixedRect, movingRect,ball1,ball2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  ball1=createSprite(200,400,20,30);
  ball2=createSprite(800,400,30,20);
  ball1.velocityX=3;
  ball2.velocityX=-3;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  bounceOff(ball1,ball2);

  
  drawSprites();
}

