class Box{
    constructor(x,y,width,hieght){
        
        var options = {
            restitution : 0.8,
            friction : 0.65,
            density : 1
        }

        this.body = Bodies.rectangle(x,y,width,hieght,options);

            this.width = width;
            this.hieght = hieght;

            World.add(world,this.body);

    }

    display () {

        push();

        translate(this.body.position.x,this.body.position.y);

        angleMode(RADIANS)

        rotate(this.body.angle);

        rectMode(CENTER);

        strokeWeight(4);

        stroke("darkBlue");

        fill("blue");

        rect(0,0,this.width,this.hieght);

        pop();

    }

}