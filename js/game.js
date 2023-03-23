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
    this.waveCounter = 1
    this.zombiesKilled = 0
    this.frameCounter = 0,
    this.killsIncrease = 3
    this.seconds = 180
    
    this.init();
  }
  init() {
    this.background = new Background(...this.info);
    this.player = new Player(...this.info);
    this.createZombie();
    this.createScoreboard()
  }
  draw() {    
    ++this.frameCounter;
    this.background.draw();
    this.player.draw();
    this.drawScoreboard()
    this.goToNextWave()
    
    this.createZombieByTime()
    
    this.zombies.forEach((zombie) => {
        if(this.isColliding(zombie, this.player)){
          this.gameOver = true
        }
      //This is for any bullet-zombie collision
      this.player.bullets.forEach((bullet)=>{
        if(this.isColliding(bullet, zombie)){
          // We remove the zombie, once it has been hit by a bullet
          this.zombies.splice(this.zombies.indexOf(zombie), 1)
          this.addPoints()
          this.zombiesKilled ++
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
    this.soundZombie.pause()
    return this.gameOver
    
  }
  addPoints(){
    this.score+= 10
    this.soundZombie.pause()
  }
  drawScoreboard(){
    this.drawScoreBar()
    this.ctx.fillStyle = 'white'
    this.ctx.font = "20px sans-serif";
    this.ctx.fillText(`Your score: ${this.score} Wave: ${this.waveCounter}`, 100, 50)
    this.ctx.fillStyle = 'black'
  }
  createScoreboard(){
    this.scoreBar = new Image()
    this.scoreBar.src = "img/score-bar.png"
  }
  drawScoreBar(){
    this.ctx.drawImage(this.scoreBar, 5, 5, 400, 75)
  }
  createZombieByTime(){
    this.soundZombie = new Audio("../audio/soundZombie.mp3")
    if (this.frameCounter >= this.seconds) {
      this.createZombie();
      this.soundZombie.play();
      console.log('se ha creado un zombie', this.frameCounter)
      this.frameCounter = 0;
    }
  }
  goToNextWave(){
    if(this.zombiesKilled === this.killsIncrease){
      this.seconds >= 70 ? this.seconds -= 30 : null
      this.waveCounter ++
      this.zombiesKilled = 0
      this.killsIncrease += 3
    }
  }
}
