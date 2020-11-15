const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1, ground1, polygon;



function setup() {
  createCanvas(800,400);
  var canvas = createCanvas(1200,400);

  engine = Engine.create();
	world = engine.world;
   
   ground1 = new Ground(100, 100, 20, 100); 

   Engine.run(engine);

}

function draw() {
  background(255,255,255); 

    
  ground1.display(); 
  drawSprites();
}