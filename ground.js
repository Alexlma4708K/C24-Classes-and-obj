class Ground{
    
    constructor(x,y,width,height){
        var option={
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,option)
        this.width = width;
        this.height = height;
        World.add(myWorld,this.body)
    }
    display(){
        var post=this.body.position;
        push();
        rectMode(CENTER);
        fill("brown");
        rect(post.x,post.y,this.width,this.height)
        pop();
        }
}