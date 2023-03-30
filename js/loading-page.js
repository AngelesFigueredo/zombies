class LoadingPage {
  constructor(ctx, canvasHeight, canvasWidth, onClick) {
    this.ctx = ctx;
    this.onClick = onClick;
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.image = undefined;
    this.init();
  }
  init() {
    this.createLoadingPage();
    this.listen();
  }
  createLoadingPage() {
    this.image = new Image();
    this.image.src = "img/pantalla-de-inicio.png";
  }
  draw() {
    this.ctx.drawImage(this.image, 0, 0, this.canvasWidth, this.canvasHeight);
  }
  listen() {
    this.music = new Audio("audio/background-music.mp3")
    document.addEventListener("click", () => {
        this.onClick();
        this.music.play()
    });
  }
}
