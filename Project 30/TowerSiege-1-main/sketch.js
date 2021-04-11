
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	p1  = loadImage("polygon.png")
}

function setup() {
	createCanvas(1200, 500);


	engine = Engine.create();
	world = engine.world;
  var opt = 
  {
    restitution : 0.8,
    friction : 1.0,
    density : 1.5
  }
    polygon = Bodies.circle(200,400,20,opt);
    World.add(world,polygon);

    sling1 = new SlingShot(polygon,{x:250,y:100});
    ground = new Ground(600,height,1200,20);
    platform = new Ground(700,300, 350, 20);
    block1 = new Block(600,250,30,40);
    block2 = new Block(630,250,30,40);
    block3 = new Block(660,250,30,40);
    block4 = new Block(690,250,30,40);
    block5 = new Block(720,250,30,40);
    block6 = new Block(750,250,30,40);
    block7 =  new Block(630,210,30,40);
    block8 = new Block(660,210,30,40);
    block9 = new Block(690,210,30,40);
    block10 = new Block(720,210,30,40);
    block11 = new Block(660,170,30,40);
    block12=new Block(690,170,30,40);

    Engine.run(engine);
}

function draw() {
    rectMode(CENTER);
    background(0);

    sling1.display();
    ground.display();
    platform.display();
   block1.display();
   block2.display();
   block3.display();
   block4.display();
   block5.display();
   block6.display();
   block7.display();
   block8.display();
   block9.display();
   block10.display();
   block11.display();
   block12.display();

  
   
    drawSprites();

    imageMode(CENTER);
    image(p1, polygon.position.x,polygon.position.y,40,40)
   
  }

function mouseDragged(){
Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    
}

  function mouseReleased(){
    sling1.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling1.attach(this.polygon)
  }
}