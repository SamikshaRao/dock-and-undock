var back;
var iss,issImg;
var spacecraft,spacebgImg;
var hasDocked=false;



function preload(){
back=loadImage("spacebg.jpg");
issImg=loadImage("iss.png");
spacecraftImg=loadImage("spacecraft1.png");
}


function setup() {
  createCanvas(800,400);


spacecraft=createSprite(500, 330, 50, 50);
spacecraft.addImage(spacecraftImg);
spacecraft.scale=0.2;

iss=createSprite(400, 200, 50, 50);
iss.addImage(issImg);
iss.scale=0.7;

}
function draw() {
  background(back);  
  iss.display();
  spacecraft.display();
  if(!hasDocked){
if(keyWentDown(LEFT_ARROW)){
  spacecraft.x-=5
}
if(keyWentDown(RIGHT_ARROW)){
  spacecraft.x+=5
}
if(keyWentDown(UP_ARROW)){
  spacecraft.y-=4
}
if(keyWentDown(DOWN_ARROW)){
  spacecraft.y+=4
}
  }
  if(spacecraft.isTouching(iss)){
    text("Docking successful",500,200)
  }
  drawSprites();
}