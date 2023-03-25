# Zombies

Description
Welcome to Zombies, the ultimate test of your survival skills! In this intense game, your goal is to survive as long as possible against hordes of bloodthirsty zombies. Armed only with your trusty weapon, you must fend off a variety of zombie types that will appear randomly throughout the game.
With each new wave of zombies comes a greater challenge, as the undead become stronger, faster, and more numerous. You'll need to use all your combat skills to stay alive!
So grab your weapon and get ready to face the zombie apocalypse…Good luck!

## MVP (DOM - CANVAS)

Single player game, the player must be able to shoot (by pressing space) and aim (by pressing the arrows) and combine them in order to kill all the zombies approaching.

When the space is pressed, the player's character will shoot a bullet in the direction they are currently facing. The player will need to aim using the arrow keys to make sure they hit their target.
![game screenshoot](https://i.imgur.com/KXfypEf.png)

## Backlog

- Create a loading screen, player rotation, zombies appear on screen
- Collision logic, zombies now appear randomly
- Sprites, background, gameover screen added
- Scoretable added, zombie waves logic implementation
- Audio implementation

## Data structure

### main.js

```
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
          if(zombie.dead){
            this.zombies.splice(this.zombies.indexOf(zombie), 1)
            this.addPoints()
            this.zombiesKilled ++

          }else{
  
            zombie.dead = true
          }
          //The bullet is removed once it has hit a zombie
          this.player.bullets.splice(this.player.bullets.indexOf(bullet),1)
        }
      })
      zombie.draw();
      
    });
  }
  createZombie() {
    this.zombies.push(this.decideZombieRandomly());
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
    this.soundZombie = new Audio("audio/soundZombie.mp3")
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
  decideZombieRandomly(){
    const range = Math.floor(Math.random()*14)
    if(range < 4){
      return (new CopZombie(...this.info))
    }else if(range < 10){
       return (new NormalZombie(...this.info))
    }else if(range < 15){
       return (new ArmyZombie(...this.info))
    }
  }
```

