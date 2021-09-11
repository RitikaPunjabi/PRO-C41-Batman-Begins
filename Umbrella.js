class Umbrella{
    constructor(x,y){

        var options ={
            isStatic: true
        }
        this. r = 50;
        this.image = loadImage("Walking Frame/walking_1.png");
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(myWorld,this.body);
    }

    image(){
        boy = createSprite(100,100);
        drawSprites();
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill(this.color);
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);
    }
}