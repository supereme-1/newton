var bobObject1,bobObject2,bobObject3
,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var roof;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
var canvas = 	createCanvas(1200, 700);
   

	engine = Engine.create();
	world = engine.world;
  
  roof = new Roof(560,100,210,10);
  
  bobObject1 = new Bob(475,300,44);
 bobObject2 = new Bob(520,300,44);
  bobObject3 = new Bob(565,300,44);
 bobObject4= new Bob(610,300,44);
  bobObject5 = new Bob(655,300,44);
rope1=new Rope(bobObject1.body,roofObject.body,-44,0)

Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("pink");
  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
 rope1.display();
}
function keyPressed(){
  if(keyCode(UP_ARROW)){
  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-85,y:85})
  }
}



