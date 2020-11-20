class Ground {
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }

        this.body = Bodies.rectangle(600,395,1200,10);
        this.width=width;
        this.height=height;
        World.add(world, this.body);

    }
    display(){

        var pos= this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(400,390, this.width, this.height);

    }
}