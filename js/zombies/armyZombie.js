class ArmyZombie extends Zombie{
    constructor(ctx, canvasHeight, canvasWidth){
        super(ctx, canvasHeight, canvasWidth)
        this.init()
    }
    init(){
        this.changeSize()
        this.decideDirection()
        this.remove = false
        this.decidePos()
        this.createImage(this.direction)
        this.vel = 3
    }
    createImage(imageName) {
    this[imageName] = new Image();
    if (this.direction === "up") {
      this[imageName].src = "img/zombie/army/up.png";
    } else if (this.direction === "down") {
      this[imageName].src = " img/zombie/army/down.png";
    } else if (this.direction === "left") {
      this[imageName].src = " img/zombie/army/left.png";
    } else if (this.direction === "right") {
      this[imageName].src = " img/zombie/army/right.png";
    }
    this[imageName].frames = 9;
    this[imageName].framesIndex = 0;
    }
    changeSize(){
        this.size.w = 200
        this.size.h = 200
    }
    isUp(){
        this.sprite.posXY.x += this.canvasWidth / 2 +5
        this.posXY.x += this.canvasWidth / 2 - this.size.w/3
        this.posXY.y = 0
        this.sprite.posXY.y = 100
    }
  isDown(){
    this.sprite.posXY.x += this.canvasWidth / 2 +20
    this.posXY.x += this.canvasWidth / 2- this.size.w/2 +50
    this.posXY.y += this.canvasHeight - (this.size.h/2) 
    this.sprite.posXY.y += this.canvasHeight - (this.size.h/2) +50
  }
  isRight(){
      this.posXY.y = this.canvasHeight/2 - (this.size.w/2)
      this.posXY.x = this.canvasWidth - (this.size.h/2) 
      this.sprite.posXY.y = this.posXY.y + 70
      this.sprite.posXY.x = this.canvasWidth - (this.size.h/2) + 30

  }

  isLeft(){
    this.posXY.x += this.size.w/2 
    this.sprite.posXY.x += this.size.w/2 +100
    this.sprite.posXY.y += this.canvasHeight/2 +20
    this.posXY.y += this.canvasHeight/3 + 65
  }

}