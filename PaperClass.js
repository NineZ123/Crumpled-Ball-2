class PaperClass{
    constructor(x, y,radius) {
        var options = {
            isStatic : false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            
        }
    this.body = Bodies.circle(x ,y,70,options);

    this.radius=70;

 this.image=loadImage("paper.png");

    World.add(world,this.body);

   
    }
    
    display(){
        
        var pos =this.body.position;
       imageMode(CENTER);
        image(this.image,pos.x-0,pos.y+45,70,70);
        
      pop();
    }

    
    
}
