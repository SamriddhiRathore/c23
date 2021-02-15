//namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies= Matter.Bodies;

var engine, world;
var ground;
var box1, box2;

function setup() {
  createCanvas(800,400);

engine = Engine.create();

world = engine.world;



ground = new Ground();

box1 = new Box(300, 320, 70, 70);
box2 = new Box(330, 220, 70, 100);

  
}

function draw() {
  background(0);  
  rectMode(CENTER);
  Engine.update(engine);
  

  ground.display();

  box1.display();
  box2.display();
  
}






