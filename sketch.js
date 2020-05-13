
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var box, ball, plate1, plate2, cannon, circle;

function setup() {

  createCanvas(800,400);

  engine = Engine.create();

  world = engine.world;

  ball = new Circle(50,50,35);

  cannon = new Slingshot(ball.body,{x : 50, y : 50});

  plate1 = new Plate(600,185,100,10);

  plate2 = new Plate(390,200,800,20);

  for (var i = 610; i < 690;i + 20){
    box = new Box(i,175,20,20);
  }

  for (var r = 620; r < 680;r + 20){
    box = new Box(r,175,20,20);
  }

  for (var z = 630; z < 670 ;z + 20){
    box = new Box(z,175,20,20);
  }


}

function draw() {

  background(0,0,0); 
  
  Engine.update(engine);

  ball.display();

  plate1.dispaly();

  plate2.display();

  cannon.display();

  box.display();
  
}