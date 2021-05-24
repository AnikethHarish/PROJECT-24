const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber;
var iron;
var stone;

function setup() {
  var canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  plane = new Plane(600, height, 1200, 20)
  hammer = new Hammer(10, 100);
  rubber = new Rubber(500, 200, 13);
  iron = new Iron(600, 300);
  stone = new Stone(500, 400, 50, 50);
  //var iron_options={
  // restitution:0.8,
  // friction:0.9,
  //  density:5
  // }

  // iron=Bodies.rectangle(600,300,20,20,iron_options);
  //  World.add(world.iron);
}

function draw() {
  background("lightBlue");
  Engine.update(engine);
  plane.display();
  hammer.display();
  iron.display();
  rubber.display();
  stone.display();
  //rectMode(CENTER);
  //rect(iron.position.x)
}