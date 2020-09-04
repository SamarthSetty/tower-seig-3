const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygonimage 
var score = 0
var bg;

function preload(){
  polygonimage=loadImage("baseball.png")
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
    world = engine.world;

    ground1=new Ground(390,250,300,10);
    block1 = new Box(310,235,30,40);
    block2 = new Box(350,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(430,235,30,40);
    block5 = new Box(470,235,30,40);

    block6 = new Box(340,195,30,40);
    block7 = new Box(380,195,30,40);
    block8 = new Box(420,195,30,40);
    block9 = new Box(460,195,30,40);

    block10 = new Box(370,155,30,40);
    block11 = new Box(410,155,30,40);
    block12 = new Box(450,155,30,40);

  getBackgroundcolor();

  polygon = Bodies.rectangle(200,200,50,50,{restitution:0.8, 'friction':1.0,
  'density':1.0})
  World.add(world,polygon);
  
  chain = new Chain(polygon,{x:200,y:200});

}
function draw() {
  Engine.update(engine);
  if(bg!== undefined){
  background(bg); 
  }
  text(mouseX+":"+mouseY,600,100);
imageMode(CENTER)
image(polygonimage,polygon.position.x,polygon.position.y,50,50)
noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score,620,100)  

ground1.display();
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
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  chain.display();
  drawSprites();
}
function mouseDragged (){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY});
}

function mouseReleased(){
chain.fly();
}

function keyPressed(){
  if(keyCode === 32 ){
     chain.attach(polygon);
  }
}
  async  function getBackgroundcolor() {
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0600 && hour<=1900){
      bg = "yellow";
  }
  else{
      bg = "black";
  }

  }