var fixedRect,movingRect;
function setup() {
  
createCanvas(800,400);
fixedRect=createSprite(200, 200, 50, 80);
fixedRect.shapeColor="green";
fixedRect.debug=true;
movingRect=createSprite(400,200,80,30);
movingRect.shapeColor="green";
movingRect.debug=true;
gameObject1=createSprite(100,100,50,50);
gameObject1.shapeColor="green";

gameObject2=createSprite(200,100,50,50);
gameObject2.shapeColor="green";

gameObject3=createSprite(300,100,50,50);
gameObject3.shapeColor="green";
}


function draw() {
  background(0,0,0);
  console.log(movingRect.x-fixedRect.x);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 
  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  
  bounceOff(movingRect,fixedRect);
  drawSprites();

}
