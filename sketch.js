
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine,world;
var sling;
var boyimage;
var boysprite;
var treesprite;
var treeimage;
var back;

function preload()
{
	boyimage=loadImage("boy.png");
  treeimage=loadImage("tree.png");
  back=loadImage("forest.jpg");
}

function setup() {
	createCanvas(1300, 600);

	engine = Engine.create();
	world = engine.world;

  treesprite=createSprite(1050,300,50,50);
  treesprite.addImage(treeimage);
  treesprite.scale=0.5;

	//Create the Bodies Here.
	stoneObj=new stone(235,420,30);
	groundObj=new ground(width/2,600,width,20);
	//boyObj=new boy(125,425,140,240);
  //treeObj=new tree(1050,580);
	mango1=new mango(1010,140,30);
	mango2=new mango(1100,100,30);
	mango3=new mango(1170,130,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1100,70,30);
	mango6=new mango(1000,230,30);
	mango7=new mango(900,230,25);
	mango8=new mango(1140,150,25);
	mango9=new mango(1100,230,25);
	mango10=new mango(1200,200,25);
	mango11=new mango(1120,50,25);
	mango12=new mango(900,160,25);
	sling = new slingshot(stoneObj.body,{x:240,y:450});
  Engine.run(engine);
}

function draw() {  
  background(back);
  textSize(25);
  fill("black");
  text("Press space to get a second chance to play",50,50);
  drawSprites();
  image(boyimage,200,370,200,300); 

  groundObj.display();
  //boyObj.display();
  //treeObj.display();
  sling.display();
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
  stoneObj.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  detectCollision(stoneObj,mango10);
  detectCollision(stoneObj,mango11);
  detectCollision(stoneObj,mango12);

}
function mouseDragged() {
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY})
    
}
function mouseReleased(){

	sling.fly();
}
function keyPressed(){

	if(keyCode===32){
    Matter.Body.setPosition(stoneObj.body,{x:275, y:420});
		sling.attach(stoneObj.body);
	}
}
function detectCollision(lstone,lmango){

mangoPosition=lmango.body.position;
stonePosition=lstone.body.position;
var distance=dist(stonePosition.x,stonePosition.y,mangoPosition.x,mangoPosition.y);
if(distance<lmango.r+lstone.r){

	Matter.Body.setStatic(lmango.body,false);
}
}
