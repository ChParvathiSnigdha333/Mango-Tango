
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bgImg ;
var ground ;
var treeImg;
var stone ;
var boyImg ;
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, mango10;
var mango11, mango12, mango13, mango14;
var launcher ;

function preload(){
	bgImg = loadImage ("Plucking mangoes/bg_img.png")
	treeImg = loadImage ("Plucking mangoes/tree.png")
	boyImg = loadImage ("Plucking mangoes/boy.png")
}

function setup() {
	createCanvas(1200, 600);
	
	engine = Engine.create();
	world = engine.world;

	ground = new Ground (600,580,1200,10)

	stone = new Stone (88,450,30)

	mango1 = new Mango(1018,200,20)
	mango2 = new Mango(780,300,18)
	mango3 = new Mango(900,330,15)
	mango4 = new Mango(965,255,15)
	mango5 = new Mango(860,220,20)
	mango6 = new Mango(850,300,10)
	mango7 = new Mango(940,170,25)
	mango8 = new Mango(972,310,18)
	mango9 = new Mango(1018,110,18)
	mango10 = new Mango(1090,155,15)
	mango11 = new Mango(890,160,10)
	mango12 = new Mango(1080,260,17)
	mango13 = new Mango(1150,200,17)
	mango14 = new Mango(1160,310,17)

	launcher = new Launcher(stone.body,{ x:88 , y:450 }) ;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bgImg);

  image (boyImg,50,380,220,260)
  image (treeImg,750,87,500,500)

  //ground.display();

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display();

  launcher.display();

  detectollision(stone,mango1)
  detectollision(stone,mango2)
  detectollision(stone,mango3)
  detectollision(stone,mango4)
  detectollision(stone,mango5)
  detectollision(stone,mango6)
  detectollision(stone,mango7)
  detectollision(stone,mango8)
  detectollision(stone,mango9)
  detectollision(stone,mango10)
  detectollision(stone,mango11)
  detectollision(stone,mango12)
  detectollision(stone,mango13)
  detectollision(stone,mango14)

  drawSprites();
 
  strokeWeight(2)
  stroke("black")
  fill("white")
  textFont("Broadway")
  textSize(25)
  text ("Press Space for a Second Chance", 325,100)

  strokeWeight(2)
  stroke("black")
  fill("white")
  textFont("Broadway")
  textSize(25)
  text ("Drag the stone and realese it to shoot", 300,50)

}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x:mouseX , y:mouseY})
}

function mouseReleased(){
    launcher.fly();
}

function detectollision(lstone,lmango){
  mangoBodyPosition = lmango.body.position ;
  stoneBodyPosition = lstone.body.position ;

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x,  mangoBodyPosition.y)

  if (distance <= lmango.r + lstone.r){
    Matter.Body.setStatic(lmango.body,false);
  }
}

function keyPressed(){
  if (keyCode === 32){
    Matter.Body.setPosition(stone.body,{x:88, y:450})
    launcher.attach(stone.body)
  }
}