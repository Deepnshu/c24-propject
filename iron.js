class Iron{
    constructor(x, y) {
        var options = {
          'density':30,
          'friction': 3,
          'restitution':0.8
        };
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 150;
        this.height = 40;
        World.add(world, this.body);
      };

display(){


var ipos=this.body.position;		
			push()
			translate(ipos.x, ipos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			//stroke("black");
			fill("red");
			
			rect(400,0,60,50);

			pop()


}

}
