class Bird{
    constructor(x,y){
        //This refers to the obj that currently uses the class
        var option = {
            restitution : 0.8,
            friction : 0.3, 
            density : 0.8
        }
        this.body = Bodies.rectangle(x,y,50,50,option);
        this.width = 50
        this.height = 50;
        World.add(myWorld,this.body);
    }

    display(){
        var pos = this.body.position;
        this.body.position.x =mouseX;
        this.body.position.y = mouseY;
        var angle = this.body.angle;
        console.log(this.body.angle);
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }
}