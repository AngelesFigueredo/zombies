class Zombie {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
    this.canvasHeight = canvasHeight,
    this.canvasWidth = canvasWidth,
    this.direction = undefined,
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
    this.vel = 2,
    
    this.init()

  }
  init() {
    this.decideDirection()
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
}