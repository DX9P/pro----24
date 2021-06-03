class Box {
    constructor(x,y,w,h){
  var option={
      isStattic:true
      
  }
  
  
  this.body = Bodies.rectangle(x,y,w,h,option);
  this.width = w;
  this.height = h;
  World.add(world,this.body);
  Matter.Body.setStatic(this.body,true)
      }
  
  display(){
  var pos = this.body.position;
  
  
  
  rectMode(CENTER);
  fill("red");
  rect(pos.x,pos.y,this.width,this.height);
  
  
  
  
  }
  
  
  } 