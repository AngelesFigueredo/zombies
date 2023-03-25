class CopZombie extends Zombie{
    constructor(ctx, canvasHeight, canvasWidth){
        super(ctx, canvasHeight, canvasWidth)
        this.init()
    }
    init(){
        this.dead = false
        this.changeSize()
        this.decideDirection()
        this.decidePos()
        this.createImage(this.direction)
        this.vel = 1
    }
    createImage(imageName) {
    this[imageName] = new Image();
    if (this.direction === "up") {
      this[imageName].src = "img/zombie/cop/up.png";
    } else if (this.direction === "down") {
      this[imageName].src = " img/zombie/cop/down.png";
    } else if (this.direction === "left") {
      this[imageName].src = " img/zombie/cop/left.png";
    } else if (this.direction === "right") {
      this[imageName].src = " img/zombie/cop/right.png";
    }
    this[imageName].frames = 9;
    this[imageName].framesIndex = 0;
    }
    changeSize(){
        this.size.w = 100
        this.size.h = 100
    }
    isUp(){
    this.sprite.posXY.x += this.canvasWidth / 2 +30
    this.posXY.x += this.canvasWidth / 2
    this.posXY.y = 0
    this.sprite.posXY.y = 20

  }
  isDown(){
    this.sprite.posXY.x += this.canvasWidth / 2 +20
    this.posXY.x += this.canvasWidth / 2
    this.posXY.y += this.canvasHeight - (this.size.h/2)
    this.sprite.posXY.y += this.canvasHeight - (this.size.h/2) +30

  }
  isRight(){
    this.sprite.posXY.y += this.canvasHeight/2 +25
    this.posXY.y += this.canvasHeight/2
    this.posXY.x += this.canvasWidth - (this.size.h/2)
    this.sprite.posXY.x += this.canvasWidth - (this.size.h/2) +25

  }

  isLeft(){
    this.posXY.x += this.size.w/2 
    this.sprite.posXY.x += this.size.w/2 +20
    this.sprite.posXY.y += this.canvasHeight/2 +20
    this.posXY.y += this.canvasHeight/2
  }


}