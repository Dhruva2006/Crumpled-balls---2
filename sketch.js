
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
	dustbin1 = new Dustbin();
	box1 = new Box(50,20,20,20);
	ground = new Ground(400,height,800,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  dustbin1.display();
  box1.display();
  ground.display();
  background(0);
  keyPressed();
  
  drawSprites();
 
}

function keyPressed() {
	if(KeyCode == UP_ARROW) {
		Matter.Body.applyForce(paperObject.body, paperObject.body.position, {x:85, y:-85});
	}
}



