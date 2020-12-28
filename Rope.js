class Rope {
    constructor(body1, body2, offsetX, offsetY){

        this.offsetX = offsetX;
        this.offset = offsetY;
        
        var options = {
        bodyA: body1,
        bodyB: body2,
        pointB: {x:this.offsetX, y: this.offsetY}
        }
        console.log(options);
        World.add(world, this.body);
        
        }

    display(){
        var pointA = this.chain.bodyA.position
        var pointB = this.chain.bodyB.position
        strokeWeight(4);
        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        rope1 = new rope(BO1.body,roof.body, -bobDiameter * 2, 0);
    }
}
