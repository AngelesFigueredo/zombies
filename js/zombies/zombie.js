class Zombie {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
    this.canvasHeight = canvasHeight,
    this.canvasWidth = canvasWidth,
    this.direction = undefined,
    this.framesCounter = 0,
    this.dead = true
    this.randomDirection = ["up", "down", "left", "right"],
    this.size = {
        w: 100,
        h: 100,
    }, 
    this.posXY = {
        x: -this.size.w/2, 
        y: - this.size.h/2
    },
    //this.sprite represent the collision zone
    this.sprite = {
      size: {
      w: 55,
      h: 55,
      },
      posXY : {
        x: -this.size.w/2 , 
        y: - this.size.h/2 
      }
    }
    this.vel = 2
    
  }
  drawSprite(imageName) {
    this.animateImage(this.framesCounter, this[imageName], 5)
     this.ctx.drawImage(
      this[imageName],
      (this[imageName].width / this[imageName].frames) * this[imageName].framesIndex,
      0,
      this[imageName].width / this[imageName].frames,
      this[imageName].height,
      this.posXY.x,
      this.posXY.y,
      this.size.w,
      this.size.h
    );
  }
  draw(){
    this.framesCounter ++
    this.resetFramesCounter()
    // this.ctx.fillRect(this.sprite.posXY.x, this.sprite.posXY.y, this.sprite.size.w, this.sprite.size.h)
    this.drawSprite(this.direction)
    this.move()
    
  }
  decidePos(){
    if(this.direction === "up"){
      this.isUp()
    }else if(this.direction === "down"){
      this.isDown()
    }else if(this.direction === "right"){
      this.isRight()
    }else if(this.direction === "left"){
      this.isLeft()
    }
  }
  
  move(){
    if(this.direction === "right"){
      this.posXY.x -= this.vel
      this.sprite.posXY.x -= this.vel
    }else if(this.direction === "left"){
      this.posXY.x += this.vel
      this.sprite.posXY.x += this.vel
    }else if(this.direction === "up"){
      this.posXY.y += this.vel
      this.sprite.posXY.y += this.vel
    }else if(this.direction === "down"){
      this.posXY.y -= this.vel
      this.sprite.posXY.y -= this.vel
    }
  }
  decideDirection(){
    const randomNumber = Math.floor(Math.random() * this.randomDirection.length);
    this.direction = this.randomDirection[randomNumber];   
  }
  resetFramesCounter(){
    this.framesCounter > 1000 ? (this.framesCounter = 0) : this.framesCounter++
  }
  animateImage(framesCounter, image, speed) {
    if (framesCounter % speed === 0) {
      image.framesIndex++;
    }
    if (image.framesIndex >= image.frames) {
      image.framesIndex = 0;
    }
  }
  
}