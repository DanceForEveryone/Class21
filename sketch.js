var fixedRect,object1;





function setup() {
  createCanvas(800,800);
  fixedRect=createSprite(200,200,50,80);
  movingRect=createSprite(400,200,80,30)
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green"
  fixedRect.debug = true ;
  movingRect.debug = true ;

  gameObject2=createSprite(400,100,50,80);
  gameObject1=createSprite(400,800,80,30)
  gameObject2.shapeColor="purple";
  gameObject1.shapeColor="purple";
  gameObject2.debug = true ;
  gameObject1.debug = true ;
gameObject1.velocityY=-5;
gameObject2.velocityY=5;
}

function draw() {
  background("yellow"); 
  movingRect.x=mouseX;
  movingRect.y=mouseY;
 //isTouching();
bounceOff(gameObject1,gameObject2);

if(isTouching(movingRect,fixedRect)){
  fixedRect.shapeColor="red";
  movingRect.shapeColor="red";
}else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green" 

}

  drawSprites()
  ;
}


