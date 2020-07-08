var car, wall;
var speed, weight;
function setup() {
  speed = random(55,90);
  weight = random(1600,400);
  car = createSprite(50,200,50,50);
  wall = createSprite(1500,200,60,height/2);
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  car.velocityX = speed;
  car.collide(wall);
}

function draw() {
  background(255,255,255);  
if(0.5*weight*speed*speed/22500 >= 180){
  car.shapeColor = color(255,0,0);
}
if(0.5*weight*speed*speed/22500 < 180 
  && 0.5*weight*speed*speed/22500 > 100 ){
  car.shapeColor = color(230,230,0);
}
if(0.5*weight*speed*speed/22500 < 100){
  car.shapeColor = color(0,255,0);
}
}