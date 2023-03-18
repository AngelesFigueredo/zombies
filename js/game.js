class Game {
  constructor(ctx, canvasHeight, canvasWidth, gameOver) {
    this.ctx = ctx,
    this.canvasHeight = canvasHeight,
    this.canvasWidth = canvasWidth,
    this.gameOver = gameOver,
    this.info = [this.ctx, this.canvasHeight, this.canvasWidth],
    this.background = undefined,
    this.zombies = []
    this.score = 0
    this.frameCounter = 0,
    this.init();
  }
  init() {
    this.background = new Background(...this.info);
    this.player = new Player(...this.info);
    this.createZombie();
  }
  draw() {
    console.log(this.score)
    
    ++this.frameCounter;
    this.background.draw();
    this.player.draw();
    this.drawScoreboard()
    
    if (this.frameCounter === 60) {
      this.createZombie();
      this.frameCounter = 0;
    }

    this.zombies.forEach((zombie) => {
        if(this.isColliding(zombie, this.player)){
          console.log("Has perdido")
          this.gameOver = true
        }
      //This is for any bullet-zombie collision
      this.player.bullets.forEach((bullet)=>{
        if(this.isColliding(bullet, zombie)){
          // We remove the zombie, once it has been hit by a bullet
          this.zombies.splice(this.zombies.indexOf(zombie), 1)
          this.addPoints()
          //The bullet is removed once it has hit a zombie
          this.player.bullets.splice(this.player.bullets.indexOf(bullet),1)
        }
      })
      zombie.draw();
      
    });
  }
  createZombie() {
    this.zombies.push(new Zombie(...this.info));
  }
  isColliding(obj1, obj2) {   
    if (
      obj1.sprite.posXY.x < obj2.sprite.posXY.x + obj2.sprite.size.w &&
      obj1.sprite.posXY.x + obj1.sprite.size.w > obj2.sprite.posXY.x &&
      obj1.sprite.posXY.y < obj2.sprite.posXY.y + obj2.sprite.size.h &&
      obj1.sprite.size.h + obj1.sprite.posXY.y > obj2.sprite.posXY.y
    ) {
      
      return true
    }
    return false
  }
  isGameOver(){
    return this.gameOver
  }
  addPoints(){
    this.score+= 10
  }
  drawScoreboard(){
    this.ctx.font = "35px serif";
    this.ctx.fillText(`Your score: ${this.score}`, 50, 50)
  }
}
