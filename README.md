# Zombies

Description
Welcome to Zombies, the ultimate test of your survival skills! In this intense game, your goal is to survive as long as possible against hordes of bloodthirsty zombies. Armed only with your trusty weapon, you must fend off a variety of zombie types that will appear randomly throughout the game.
With each new wave of zombies comes a greater challenge, as the undead become stronger, faster, and more numerous. You'll need to use all your combat skills to stay alive!
So grab your weapon and get ready to face the zombie apocalypse…Good luck!

## MVP (DOM - CANVAS)

Single player game, the player must be able to shoot (by click) and aim (by mouse) and combine them in order to kill all the zombies approaching.

When the left mouse button is pressed, the player's character will shoot a bullet in the direction they are currently facing. The player will need to aim using the mouse to make sure they hit their target.
![game screenshoot](https://github.com/AngelesFigueredo/zombies/blob/main/img/game-screenshot.png)

## Backlog

- Create a loading screen, player rotation, zombies appear on screen
- Collision logic, zombies now appear randomly
- Sprites, background, gameover screen added
- Scoretable added, zombie waves logic implementation
- Audio implementation

## Data structure

### game.js

```
class Game {
  constructor(ctx, canvasHeight, canvasWidth, gameOver) {
    this.ctx;
    this.canvasHeightht
    this.canvasWidthh,
    this.gameOver    
    this.info = [this.ctx, this.canvasHeight, this.canvasWidth],
    this.background
    this.zombies
    this.score
    this.waveCounter
    this.zombiesKilled
    this.frameCounter 
    this.killsIncrease
    this.seconds 
    
    this.init(); 
  }
  
  //Initializes the game
  init(), 
  draw()
  
   //Returns true once it has been hit by a bullet, then zombie and bullet are removed from the game.
      this.player.bullets.forEach((bullet)=>{})
      zombie.draw();
      
  //Adds zombies from a random position to the game    
  createZombie() 
  
  //Returns true if two objetcs are in the same position. 
  isColliding(obj1, obj2) 
  
  //Ends the game if zombie and played collide
  isGameOver()
  //Add 10 points once a bulltes hits the zombie
  addPoints()
  drawScoreboard()
  createScoreboard()
  drawScoreBar()
  //Sets zombies spawn
  createZombieByTime()
  //Increases zombie spawn depending on your score
  goToNextWave()
  decideZombieRandomly()
```
### apps.js
```

const zombies = {
  canvas
  ctx
  authors
  width: 
  height: 
  FPS;
  framesCounter
  gameOver
  background
  player
  obstacles
  
  //Initializes the game and sets dimensions
  startGame(),

  init() {
    this.canvas 
    this.ctx 
    this.setDimensions();
    this.start();
    this.LoadingPage 
    );
    this.game
    this.createGameOverImage();
    
  },
  
  setDimensions() {
    
  
  start(),
  clear()
  drawAll() 
  // Setting game state. End Game.
  showGameOver()
  reset()
```
### player.js
```
class Player {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx;
    this.canvasHeight;
    this.canvasWidth;
    this.info = [this.ctx, this.canvasHeight, this.canvasWidth],
    this.size;
    },
    this.framesCounter;
    this.bullets;
    this.direction;
    this.shooting;
    this.shootingTime;
    this.bulletsFramesCounter;
    this.shootingTimeCounter;
    this.posXY;
    this.sprite;
    this.key = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        space: 32,
      },
    this.init();
  }
  init() 
  //Draws the player depending on its position and action wether is shooting or not
  createAll() 
  createImage(imageName, imagePath) 
  }
  createAnimatedImage(imageName, imagePath, frames)
  
  // Draws and clear bullets image
  draw() 
  //Sets shooting action, adds bullets to an array and sets shooting cooldown and direction
  shoot() 
  }
  setCooldownSprite()
  }
  // Draws an object depending on its position
  drawDecidedSprite()
  
  //Sets the bullets remove
  clearBullets();
  
  drawSprite(imageName)
  
  //Creates audio when the player shoots and creates shooting action
  
  listen();
  
  //Animates the player image
  drawAnimatedSprite(imageName)
  resetFramesCounter()
  animateImage(framesCounter, image, speed) 
  
  //Calls mouseover in order to set the mouse coordinates
  getCoordinates()
```
## States y States Transitions

## Links
### Trello

[Link url](https://trello.com/b/QGzs8d48/game-project)

### Git

URls for the project repo and deploy
[Link Repo](https://github.com/AngelesFigueredo/zombies) || 
[Link Deploy](https://angelesfigueredo.github.io/zombies/)

### Slides

URls for the project presentation (PowerPoint)
[Link PowerPoint](https://github.com/AngelesFigueredo/zombies/blob/main/Presentaci%C3%B3n%20juego%20zombie.pptx)
