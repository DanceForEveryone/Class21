var gameObject2,gameObject1;





function setup() {
  createCanvas(800,800);
  gameObject2=createSprite(400,100,50,80);
  gameObject1=createSprite(400,800,80,30)
  gameObject2.shapeColor="green";
  gameObject1.shapeColor="green"
  gameObject2.debug = true ;
  gameObject1.debug = true ;
gameObject1.velocityY=-5;
gameObject2.velocityY=5;
}

function draw() {
  background("yellow"); 
  
 bounceOff(gameObject1,gameObject2);
  
  drawSprites();
}

function bounceOff(object1,object2){
  if ((Object1.x-Object2.x<=Object1.width/2+Object2.width/2)&&
  (Object2.x-Object1.x<=Object1.width/2+Object2.width/2 ))
   {
 
  gameObject1.velocityX=gameObject1.velocityX*(-1)  
  gameObject2.velocityX=gameObject2.velocityX*(-1) 
 
 }
 if ((gameObject1.y-gameObject2.y<=gameObject1.height/2+gameObject2.height/2)&&
  (gameObject2.y-gameObject1.y<=gameObject1.height/2+gameObject2.height/2 ))
 {
 
  gameObject1.velocityY=gameObject1.velocityY*(-1)  
  gameObject2.velocityY=gameObject2.velocityY*(-1) 
 
 }
}
 