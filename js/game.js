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
    this.playerImage = new Player(...this.info)
    this.createZombie()
  }
  draw(){
    ++ this.frameCounter
    this.background.draw()
    this.playerImage.draw()
    this.zombie.draw()
   
  }
  createZombie(){
    this.zombie = new Zombie(...this.info, "right")
  }

}
