class Background {
    constructor(ctx, canvasHeight, canvasWidth){
        this.ctx = ctx,
        this.canvasHeight = canvasHeight,
        this.canvasWidth = canvasWidth
        this.background = undefined
        this.init()
    }
    init(){
        this.create()
    }
    create(){
        this.background = new Image()
        this.background.src = "img/background.jpg"
    }
    draw(){
        this.ctx.drawImage(
          this.background,
          0,
          0,
          this.canvasWidth,
          this.canvasHeight
        );
    }
}