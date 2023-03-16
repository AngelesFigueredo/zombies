class Bullets{
    constructor(ctx, canvasHeight, canvasWidth, playerPosX, playerPosY, playerSize, playerDirection){
        this.ctx = ctx,
        this.canvasHeight = canvasHeight,
        this.canvasWidth = canvasWidth
        this.playerPosX = playerPosX
        this.playerPosY = playerPosY;
        this.playerSize = playerSize 
        this.playerDirection = playerDirection
        this.posXY = {
          x: this.playerPosX + this.playerSize.w,
          y: this.playerPosY + this.playerSize.h,
        };
        this.dimension = {
            w : 10,
            h: 10
        }
        this.vel = 3
        
        this.init()
    }
    init(){
        this.create()
    }
    create(){
        //this will work when we have a sprite defined
    }
    draw(){
        this.move()
        this.ctx.fillRect(
          this.posXY.x ,
          this.posXY.y , 
          this.dimension.w, 
          this.dimension.h
        );
    }
    
    move(){
        if(this.playerDirection === "down"){
            this.posXY.y += this.vel
        }else if(this.playerDirection === "up"){
            this.posXY.y -= this.vel
        }else if(this.playerDirection === "left"){
            this.posXY.x -= this.vel
        }else if(this.playerDirection === "right"){
            this.posXY.x += this.vel
        }
    }
}