var ball,img,paddle;
function preload() {
  ballImage = loadImage("ball.png")
  paddleImage = loadImage("paddle.png")
}
function setup() {
  createCanvas(400, 400);
  ball = createSprite(200,200,30,40)
  paddle = createSprite(380,200,20,20)
  ball.addImage("ball",ballImage)
  paddle.addImage("paddle",paddleImage)
  ball.velocityX = -9;
  

}

function draw() {
  background(205,153,0);
  edges = createEdgeSprites();
  
  ball.bounceOff(edges[0]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle,randomVelocity);
  
  

  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  paddle.collide(edges);
  
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y = paddle.y -10;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   paddle.y = paddle.y +10;
  }
  drawSprites();
  
}

function randomVelocity()
{
  ball.velocityY = random(-9,9)
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}

