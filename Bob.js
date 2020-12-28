class Bob {
    constructor(x, y) {
        var options = {
            isStatic : false,
            restitution: 1,
            friction: 0.5, 
            density: 1.2
        }
        
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 50;
        
        World.add(world, this.body);
        this.image = loadImage()
        }
        
        display() {
            var pos = this.body.position;
            ellipseMode(CENTER);
            strokeWeight(5);
            stroke(5);
            fill("pink");
            ellipse(pos.x, pos.y,this.radius, this.radius);
        }
    };