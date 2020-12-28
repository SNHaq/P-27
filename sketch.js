const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

var roof, r1, r2, r3, r4, r5, BO1, BO2, BO3, BO4, BO5
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(430,200,320,30);

	BO1 = new Bob(340,450,50);
	BO2 = new Bob(390,450,50);
	BO3 = new Bob(440,450,50);
	BO4 = new Bob(490,450,50);
	BO5 = new Bob(540,450,50);

	r1 = new Rope(roof.body, BO1.body, 100, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200,200,200);
  
 roof.display();

 BO1.display();
 BO2.display();
 BO3.display();
 BO4.display();
 BO5.display();

 r1.display();

  drawSprites();
 
}



