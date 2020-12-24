class Plinko{
    constructor(x,y){
        var option = {
            'isStatic': false,
        }
        this.body = Bodies.circle(x, y, 10, option);
        World.add(userWorld, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        ellipseMode(CENTER);
        ellipse(0, 0, 10);
        pop();

    }
}