class tree {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.x=x;
      this.y=y;
      this.width = 450;
      this.height = 600;
      this.thickness=10;
      this.image = loadImage("tree.png");
      this.body = Bodies.rectangle(x,y,this.width,this.height,this.thickness,options);      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y+10);
      fill(255);
      imageMode(CENTER);
      image(this.image,0,-this.height/2, this.width, this.height);
      pop();
    }
  };
