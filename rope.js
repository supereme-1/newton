class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }

        this.pointB = pointB;
        this.rope = Constraint.create(options);
    }

  
    display(){
        var pointA = this.rope.bodyA.position;
        var pointB =this.pointB;
        strokeWeight(4);
        line(bodyA.x,bodyA.y,BodyB.x,bodyB.y);
       }
    
}