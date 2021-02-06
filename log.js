class Log{
    constructor(x,y,height,angle){
        //This refers to the obj that currently uses the class
        var option = {
            restitution : 0.2,
            friction : 1.0, 
            frictionAir : 0.2,
            density : 0.8
        }
        this.body = Bodies.rectangle(x,y,20,height,option);
        this.width = 20
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
      
        var angle = this.body.angle;
        console.log(this.body.angle);
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       // fill("red");
       strokeWeight(3)
      // stroke(#ADD8E6)
        rect(0,0,this.width,this.height);
        pop();
    }
}