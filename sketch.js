
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1;
var rope2;
var rope3;
var rope4;
var rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
bob1 = new Bob(400,400);
bob2 = new Bob(451,400);
bob3 = new Bob(502,400);
bob4 = new Bob(349,400);
bob5 = new Bob(298,400);

roof = new Roof(395,200,300,20)

rope1 = new Rope(bob1.body,roof.body,5,5)
rope2 = new Rope(bob2.body,roof.body,57,0)
rope3 = new Rope(bob3.body,roof.body,107,0)
rope4 = new Rope(bob4.body,roof.body,0,0)
rope5 = new Rope(bob5.body,roof.body,0,0)


	

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
roof.display();

rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();




  drawSprites();
 
}



