class SlingShot{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;

        this.sling = Constraint.create(options1);
        World.add(world, this.sling);
    }
    fly(){
        this.sling.bodyA = null;
    }
    attach(body){
        this.sling.bodyA = body;   
    }
    display(){
        push();
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("lime");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
        }
    }
    
}