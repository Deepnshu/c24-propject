const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var rubber1;
var stone1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    rubber1 =  new Rubber(500,300,50)
    stone1 = new Stone(500,200,50,50)
    iron1 = new Iron(400,200)

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

Stone.debug=true
    plane.display();
    hammer.display();
    rubber1.display();
    stone1.display();
iron1.display();
    
 
}