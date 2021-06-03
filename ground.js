class Ground {
    constructor(x,y,w,h){

var optionn ={
    isStatic: true,
    density:1,
    friction:999
}
this.body = Bodies.rectangle(x,y,w,h,optionn);
this.width = w;
this.height = h;
World.add(world,this.body);



    }
    

display(){
    var pos = this.body.position;



    rectMode(CENTER);
    fill("yellow");
    rect(pos.x,pos.y,this.width,this.height);
}

}