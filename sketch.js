
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var paper;
var left,right,bottom;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	

paper= new Paper(200,600,30);

left = new Box(1230,600,20,150);
bottom = new Box(1310,660,150,20);
right = new Box(1375,600,20,150);


ground = new Ground(400,680,2200,20);




}


function draw() {
	Engine.update(engine);	
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  



left.display();
right.display();
bottom.display();
ground.display();
paper.display();

}


function keyPressed(){
	if(keyCode=== UP_ARROW ){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:210,y:-210});
	}
}


