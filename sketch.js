
var box1, ground1, polygon;

function setup() {
  createCanvas(800,400);
  var canvas = createCanvas(1200,400);
   
   ground1 = new Ground(100, 100, 20, 100); 

}

function draw() {
  background(255,255,255); 

    
  ground.display(); 
  drawSprites();
}