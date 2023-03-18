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
    this.createGameOverImage();
    
  },

  setDimensions() {
    this.width = window.innerWidth ;
    this.height = window.innerHeight;
    this.canvas.width = this.width -20;
    this.canvas.height = this.height -20;
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
      this.showGameOver()
      document.addEventListener("click", ()=> {this.reset()}, {once : true})
    }
  },
  showGameOver(){
    this.ctx.drawImage(this.gameOverImage, 0, 0, this.width, this.height);
  },
  createGameOverImage() {
    this.gameOverImage = new Image();
    this.gameOverImage.src = "img/game-over.jpg";
  },

  reset(){
    this.game = new Game(this.ctx, this.height, this.width, this.gameOver);
  }
};
