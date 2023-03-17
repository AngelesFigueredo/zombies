class Game {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
      this.canvasHeight = canvasHeight,
      this.canvasWidth = canvasWidth
      this.info = [this.ctx, this.canvasHeight, this.canvasWidth];
      this.background = undefined
      this.zombies = []
      this.frameCounter = 0
      this.init()
  }
  init(){
    this.background = new Background(...this.info);
    this.player = new Player(...this.info)
    this.createZombie()
  }
  draw(){
    ++ this.frameCounter
    this.background.draw()
    this.player.draw()
    if(this.frameCounter === 180){
      this.createZombie()
      this.frameCounter = 0
    }
    this.isColliding(this.zombies, this.player)
   this.zombies.forEach((zombie)=>{
    zombie.draw()
   })
  }
  createZombie(){
     this.zombies.push(new Zombie(...this.info))
  }
  isColliding(obj1, obj2){
    if (
      obj1.posXY.x < obj2.posXY.x + obj2.size.w &&
      obj1.posXY.x + obj1.size.w > obj2.posXY.x &&
      obj1.posXY.y < obj2.posXY.y + obj2.size.h &&
      obj1.posXY.x + obj1.posXY.y > obj2.posXY.y
    ) {
      console.log('está colisionando')
      
    }
  }
  

}
