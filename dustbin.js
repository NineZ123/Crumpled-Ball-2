class dustbin{
        constructor(x, y, width, height) {
            var options = {
                isStatic: true
            }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
            this.image=loadImage("dustbingreen.png");
          }
          display(){
            fill("white");
            imageMode(CENTER);
            var pos =this.body.position;
            image(this.image,pos.x, pos.y, this.width, this.height);
            image(this.image, 1400, 580,240, 230);
          }
    }