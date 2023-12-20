
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
   

	//Crie os Corpos aqui.
 var particle_option={
	restitution: 0.4,
    frictionAir:0.02
 }
	particle1 = Bodies.circle(220,10,10,particle_option);
	World.add(world,particle1);
	
 var plane_options={
    isStatic: true
  }
 var  block1_options={
	isStatic: true
}   
var  block2_options={
	isStatic: true
}
var rotator1_options={
    isStatic: true
}
var rotator2_options={
    isStatic: true
  }
  var rotator3_options={
    isStatic: true
  }

plane = Bodies.rectangle(10,390,400,20,plane_options);
World.add(world,plane);
block1 = Bodies.rectangle(200,390,400,20,block1_options);
World.add(world,block2);
block2 = Bodies.rectangle(350,390,400,20,block2_options);
World.add(world,block1);
rotator1 = Bodies.rectangle(250,200,150,20,rotator1_options);
World.add(world,rotator1);
rotator2 = Bodies.rectangle(250,200,150,20,rotator2_options);
World.add(world,rotator2);

Matter.Body.rotate(rotator1,angle1)
push();
translate(rotator1.position.x,rotator1.position.y);
rotate(angle1);
rect(0,0,150,20);
pop();
angle1+=0.2;
Engine.run(engine);
Fill();
rectMode();
ellipseMode();

Matter.Body.rotate(rotator2,angle2)
push();
translate(rotator2.position.x,rotator2.position.y);
rotate(angle2);
rect(0,0,150,20);
pop();
angle2+=0.3;

Matter.Body.rotate(rotator3,angle3)
push();
translate(rotator3.position.x,rotator3.position.y);
rotate(angle3);
rect(0,0,150,20);
pop();
angle3+=0.4;
}
function draw() {
  rectMode(CENTER);
  background(0);
  world = engine.world;
  

 Engine.update(engine);
 
 
  drawSprites();
 
}



