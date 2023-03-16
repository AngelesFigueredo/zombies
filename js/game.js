class Game {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
      this.canvasHeight = canvasHeight,
      this.canvasWidth = canvasWidth
      this.background = undefined
      this.init()
  }
  init(){
    this.background = new Background(this.ctx, this.height, this.width);
  }
  draw(){
    this.background.draw()
    console.log('hola')
  }

}
