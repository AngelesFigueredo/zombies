class Bullets{
    constructor(ctx, canvasHeight, canvasWidth, playerSpriteObj, playerDirection){
        this.ctx = ctx,
        this.canvasHeight = canvasHeight,
        this.canvasWidth = canvasWidth
        this.playerSprite = playerSpriteObj
        this.playerDirection = playerDirection
        this.posXY = {
          x: undefined,
          y: undefined,
        };
        this.dimension = {
            w : 10,
            h: 10
        },
        this.sprite = {
            posXY: {
                x: undefined, 
                y: undefined
            }, 
            size: {
                w: this.dimension.w, 
                h: this.dimension.h
            }
        },
        this.vel = 3
        
        this.init()
    }
    init(){
        this.decidePos()
        this.create()
    }
    create(){
        //this will work when we have a sprite defined
    }
    draw(){
        
        this.move()
        this.ctx.fillStyle = 'red'
        this.ctx.fillRect(
          this.posXY.x ,
          this.posXY.y , 
          this.dimension.w, 
          this.dimension.h,
        );
        this.ctx.fillStyle = 'black'
    }
    
    move(){
        if(this.playerDirection === "down"){
            this.posXY.y += this.vel
            this.sprite.posXY.y += this.vel
        }else if(this.playerDirection === "up"){
            this.posXY.y -= this.vel
            this.sprite.posXY.y -= this.vel
        }else if(this.playerDirection === "left"){
            this.posXY.x -= this.vel
            this.sprite.posXY.x -= this.vel
        }else if(this.playerDirection === "right"){
            this.posXY.x += this.vel
            this.sprite.posXY.x += this.vel
        }
    }
    decidePos(){
        
        if(this.playerDirection === "up"){
            this.isUp()
        }else if(this.playerDirection === "down"){
            this.isDown()
        }else if(this.playerDirection === "right"){
            this.isRight()
        }else if(this.playerDirection === "left"){
            this.isLeft()
        }
    }
    isUp(){
        this.posXY.y = this.playerSprite.posXY.y 
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        this.sprite.posXY.y = this.playerSprite.posXY.y 
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
    }
    isDown(){ 
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w/2
        
    }
    isLeft(){
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.posXY.x = this.playerSprite.posXY.x 
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.sprite.posXY.x = this.playerSprite.posXY.x 
    }
    isRight(){ 
        this.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w
        this.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
        this.sprite.posXY.x = this.playerSprite.posXY.x + this.playerSprite.size.w
        this.sprite.posXY.y = this.playerSprite.posXY.y + this.playerSprite.size.h/2
    }
    
}