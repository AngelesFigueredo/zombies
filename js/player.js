class Player {
  constructor(ctx, canvasHeight, canvasWidth) {
    this.ctx = ctx,
    this.canvasHeight = canvasHeight,
    this.canvasWidth = canvasWidth,
    this.info = [this.ctx, this.canvasHeight, this.canvasWidth],
    this.size = {
      w: 200,
      h: 200,
    },
    this.framesCounter = 0
    this.bullets = [],
    this.direction = "down",
    this.posXY = {
        x: this.canvasWidth / 2 - this.size.w / 2 ,
        y: this.canvasHeight / 2 - this.size.h / 2,
      },
    this.sprite = {
      posXY : {
        x: this.canvasWidth / 2 - this.size.w / 2 +55,
        y: this.canvasHeight / 2 - this.size.h / 2 + 50
      }, 
      size: {
      w: 100,
      h: 100,
    }
    }
    this.key = {
        up: 38,
        down: 40,
        left: 37,
        right: 39,
        space: 32,
      },
    this.init();
  }
  init() {
    this.createAll();
    this.listen();
  }
  createAll() {
    this.createImage("up", "img/main-character/gun_up.png");
    this.createImage("down", "img/main-character/gun_down.png");
    this.createImage("left", "img/main-character/gun_left.png");
    this.createImage("right", "img/main-character/gun_right.png");
  }
  createImage(imageName, imagePath) {
    this[imageName] = new Image();
    this[imageName].src = imagePath;
  }
  draw() {
     this.ctx.fillRect(this.sprite.posXY.x, this.sprite.posXY.y, this.sprite.size.w, this.sprite.size.h)
    if (this.direction === "down") {
      this.drawSprite("down");
    } else if (this.direction === "left") {
      this.drawSprite("left");
    } else if (this.direction === "right") {
      this.drawSprite("right");
    } else if (this.direction === "up") {
      this.drawSprite("up");
    }
    this.bullets.forEach((bullet) => {
      bullet.draw();
    });
    this.clearBullets();
  }
  shoot() {
    this.bullets.push(
      new Bullets(...this.info, this.sprite, this.direction)
    );
  }
  clearBullets() {
    this.bullets = this.bullets.filter((bullet) => {
      if (bullet.posXY.x >= this.canvasWidth) {
        return false;
      } else if (bullet.posXY.y >= this.canvasHeight) {
        return false;
      } else if (bullet.posXY.x <= 0) {
        return false;
      } else if (bullet.posXY.y <= 0) {
        return false;
      }
      return true;
    });
  }
  drawSprite(imageName) {
    let width = this.size.w;
    let height = this.size.h;
    if (imageName === "left" || imageName === "right") {
      width = this.size.h;
      height = this.size.w;
    }
    this.ctx.drawImage(this[imageName], this.posXY.x, this.posXY.y, width, height);
  }
  listen() {
    document.addEventListener("keydown", (e) => {
      console.log(e.keyCode);
      if (e.keyCode === this.key.up) {
        this.direction = "up";
      } else if (e.keyCode === this.key.down) {
        this.direction = "down";
      } else if (e.keyCode === this.key.left) {
        this.direction = "left";
      } else if (e.keyCode === this.key.right) {
        this.direction = "right";
      } else if (e.keyCode === this.key.space) {
        this.shoot();
      }
    });
  }

  // ninguna de las líneas de aquí para abajo se han implementado, tienen como objetivo
  // que en el futuro se anime cuando dispare el jugador 
  // habría que poner un temporizador para que aparezca animación
  // asimismo queremos que tenga un "cooldown" entre disparos por lo que
  // habría que poner otro counter. Las animaciones del jugador 
  //dispando están en la carpeta "img/main-character/shooting"
  drawAnimatedSprite(imageName) {
    this.animateImage(this.framesCounter, this[imageName], 5)
     this.ctx.drawImage(
      this[imageName],
      (this[imageName].width / this[imageName].frames) * this[imageName].framesIndex,
      0,
      this[imageName].width / this[imageName].frames,
      this[imageName].height,
      this.posXY.x,
      this.posXY.y,
      this.dimension.w,
      this.dimension.h
    );
  }
  resetFramesCounter(){
    this.framesCounter > 1000 ? (this.framesCounter = 0) : this.framesCounter++
  }
  animateImage(framesCounter, image, speed) {
    if (framesCounter % speed === 0) {
      image.framesIndex++;
    }
    if (image.framesIndex >= image.frames) {
      image.framesIndex = 0;
    }
  }
}
