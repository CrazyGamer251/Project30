class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':1.0,
        'density':1.0
         
        }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.Visiblity = 225
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed < 3){
       translate(this.body.position.x,this.body.position.y);
       rotate(this.body.angle);
       rectMode(CENTER);
       rect(0,0, this.width, this.height);
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       rectMode(CENTER);
       rect(this.body.position.x,this.body.position.y, this.width, this.height);
       pop();
     }
    }
  }