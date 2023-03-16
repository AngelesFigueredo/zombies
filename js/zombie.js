class Zombie {
  constructor(ctx, canvasHeight, canvasWidth, direction) {
    this.ctx = ctx,
    this.canvasHeight = canvasHeight,
    this.canvasWidth = canvasWidth,
    this.direction = direction
    //Direction should be "up", "down", "left" or "right"
    this.size = {
        w: 100,
        h: 100,
    }, 
    this.posXY = {
        x: -this.size.w/2, 
        y: - this.size.h/2
    }
    this.init()
  }
  init() {
    this.decidePos()
    this.createImage(this.direction)

  }
  createImage(imageName) {
    this[imageName] = new Image();
    if (this.direction === "up") {
      this[imageName].src = "img/zombie/zombie_up.png";
    } else if (this.direction === "down") {
      this[imageName].src = " img/zombie/zombie_down.png";
    } else if (this.direction === "left") {
      this[imageName].src = " img/zombie/zombie_left.png";
    } else if (this.direction === "right") {
      this[imageName].src = " img/zombie/zombie_right.png";
    }

  }
  drawSprite(imageName) {
    this.ctx.drawImage(this[imageName], this.posXY.x, this.posXY.y, this.size.w, this.size.h);
  }
  draw(){
    this.drawSprite(this.direction)
  }
  decidePos(){
    if (this.direction === "up" || this.direction === "down") {
      this.posXY.x += this.canvasWidth / 2
    } else if(this.direction === "left"|| this.direction === "right"){
        this.posXY.y += this.canvasHeight/2
    }
    if(this.direction === "up"){
        this.posXY.y = 0
    } else if(this.direction === "down"){
        this.posXY.y += this.canvasHeight - (this.size.h/2)
    } else if( this.direction === "left"){
        this.posXY.x += this.size.w/2
    } else if(this.direction === "right"){
        this.posXY.x += this.canvasWidth - (this.size.h/2)
    }
  }
}