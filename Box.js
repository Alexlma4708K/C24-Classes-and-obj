class Box{
    constructor(x,y,width,height){
        //This refers to the obj that currently uses the class
        var option = {
            restitution : 0.8,
            friction : 0.3, 
            density : 0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,option);
        this.width = width;
        this.height = height;
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
        strokeWeight(4);
        stroke("brown");
        rect(0,0,this.width,this.height);
        pop();
    }
}