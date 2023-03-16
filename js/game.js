class Game {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
      this.canvasHeight = canvasHeight,
      this.canvasWidth = canvasWidth
      this.info = [this.ctx, this.canvasHeight, this.canvasWidth];
      this.background = undefined
      this.init()
  }
  init(){
    this.background = new Background(...this.info);
    this.playerImage = new Player(...this.info)
  }
  draw(){
    this.background.draw()
    this.playerImage.draw()
   
  }

}
