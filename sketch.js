
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	

	//Create the Bodies Here.
	ground1 = new Ground();
	dustbin1 = new Dustbin(400,630,100,20);
	dustbin2 = new Dustbin(350,630,20,100);
	dustbin3 = new Dustbin(500,630,20,100);
	box1 = new Box(50,20,20,20);
	ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  box1.display();
  ground.display();
  
  
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(box1.body, box1.body.position, {x:17, y:-17});
	}
}



