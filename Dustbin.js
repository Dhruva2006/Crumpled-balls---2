    class Dustbin {
    constructor() {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);

      line1 = createSprite(400,720,100,20);
      line2 = createSprite(300,720,20,100);
      line3 = createSprite(500,720,20,100);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill("red");
      rect(0, 0, this.width, this.height);
      line1.display();
      line2.display();
      line3.display();
      pop();
    }
  };
  