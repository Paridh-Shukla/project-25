class Paper {
    constructor(x, y) {
      var options = {
        isStatic:false,
        restitution:0.3,
        friction:0,
        density:1.2
      }
      this.image=loadImage("paper.png");
      this.body = Bodies.circle(x, y,70,options);
      this.r = 70
      World.add(world, this.body);
     
     // scale=2;
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
	  strokeWeight(4);
      stroke("blue")
	  fill("darkBlue");
       imageMode(RADIUS);
      image(this.image,0, 0, this.r, this.r);
      pop();
    }
  };
  