class Drops{
    constructor(x,y){

        var options = {
            restitution: 0.1
        }

        this.r = 5;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(myWorld,this.body);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)})
        }
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
    }
}