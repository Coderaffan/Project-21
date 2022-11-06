

var ground;
var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(500, 500);


	engine = Engine.create();
	world = engine.world;

		ball_options={
		isStatic:false,
		retitution:0.3,
		friction:0,
		density:1.2
		}

		ball=Bodies.circle(200,100,20,ball_options)
        World.add(world,ball)
		ellipseMode(RADIUS);
	 
		
		

	//Create the Bodies Here.
	ground =new Ground(200,390,400,20);
    right = new Ground (390,300,20,160)
     left = new Ground (260,300,20,160)
	Engine.run(engine);
	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.show()
  right.show()
  left.show()
 
  drawSprites();
 
}



