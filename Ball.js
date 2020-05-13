
class Circle{
    constructor(x, y, width) {

        var options = {
            restitution : 0.8,
            friction : 0.65,
            density : 1
        }

        this.x = x;
        this.y = y;
     
        this.width = width;

        this.body = Bodies.circle(x, y, width, options);
        World.add(world, this.body);

    }

    display() {

        ellipseMode(RADIUS);

        fill("white");

        ellipse(this.x, this.y, this.width);

    }

}
