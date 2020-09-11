const Engine= Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies
var engine,world
var ground
var box1,box2,box3

function setup() {
  
 var canvas= createCanvas(400,400);
 engine=Engine.create();
 world=engine.world;
 
 
 // ground=Bodies.rectangle(200,390,200,20,options)
 //ball=Bodies.circle(200,100,20,balloptions)
 // World.add(world,ground)
  //World.add(world,ball);
  box1=new Box(200,300,50,50)
  box2=new Box(240,100,50,50)
  box3=new Box (300,300,40,40)
  ground=new Ground(200,390,400,20)
}

function draw() {
  background(0,0,0); 
  Engine.update(engine);
 // rectMode(CENTER);
  //fill("brown")
  //rect(ground.position.x,ground.position.y,400,20)
 //ellipseMode(RADIUS);
 //ellipse(ball.position.x,ball.position.y,20,20);
 box1.display();
 box2.display();
 box3.display();
 ground.display();
}