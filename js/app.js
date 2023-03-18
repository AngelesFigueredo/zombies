const zombies = {
  canvas: undefined,
  ctx: undefined,
  authors: "Fritz Weninger, Javi Vivas, Ángeles Figueredo",
  width: undefined,
  height: undefined,
  FPS: 60,
  framesCounter: 0,
  gameOver: false,
  background: undefined,
  player: undefined,
  obstacles: [],
  startGame() {
    this.started = true;
  },

  init() {
    this.canvas = document.querySelector("canvas");
    this.ctx = this.canvas.getContext("2d");
    this.setDimensions();
    this.start();
    this.LoadingPage = new LoadingPage(
      this.ctx,
      this.height,
      this.width,
      this.startGame.bind(this)
    );
    this.game = new Game(this.ctx, this.height, this.width, this.gameOver);
  },

  setDimensions() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  },
  start() {
    setInterval(() => {
      this.clear();
      this.drawAll();
    }, 1000 / this.FPS);
  },
  clear() {
    this.ctx.clearRect(0, 0, this.width, this.height);
  },

  drawAll() {
    if (!this.started) {
      this.LoadingPage.draw();
    }else{
      this.game.draw()
    }
    if(this.game.gameOver){
      window.alert("HAS MUERTO")
    }
  },
};
