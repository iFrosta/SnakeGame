function Snake() {
  this.x = 0;
  this.y = 0;
  this.xSpeed = 0;
  this.ySpeed = 0;
  this.total = 0;
  this.tail = [];
  this.multiplier = 0;

  let head = getRandomColor();
  let body = getRandomColor();

  this.draw = () => {
    ctx.fillStyle = body;

    for (let i = 0; i < this.tail.length; i++) {
      ctx.fillRect(this.tail[i].x, this.tail[i].y, scale, scale);
    }
    ctx.fillStyle = head;
    ctx.fillRect(this.x, this.y, scale, scale);
  };

  this.update = function () {
    for (let i = 0; i < this.tail.length - 1; i++) {
      this.tail[i] = this.tail[i + 1];
    }

    this.tail[this.total - 1] =
      {x: this.x, y: this.y};

    this.x += this.xSpeed;
    this.y += this.ySpeed;

    if (this.x > canvas.width) {
      this.x = 0;
    }
    if (this.y > canvas.height) {
      this.y = 0;
    }
    if (this.x < 0) {
      this.x = canvas.width;
    }
    if (this.y < 0) {
      this.y = canvas.height;
    }
  };

  this.changeDirection = function (direction) {
    // console.log(direction);
    switch (direction) {
      case 'Up':
        this.xSpeed = 0;
        this.ySpeed = -scale + this.multiplier;
        break;
      case 'Down':
        this.xSpeed = 0;
        this.ySpeed = scale + this.multiplier;
        break;
      case 'Left':
        this.xSpeed = -scale + this.multiplier;
        this.ySpeed = 0;
        break;
      case 'Right':
        this.xSpeed = scale + this.multiplier;
        this.ySpeed = 0;
        break;
      // case 'Up-Left':
      //   this.xSpeed = -scale + this.multiplier;
      //   this.ySpeed = -scale + this.multiplier;
      //   break;
      // case 'Up-Right':
      //   this.xSpeed = scale + this.multiplier;
      //   this.ySpeed = -scale + this.multiplier;
      //   break;
      // case 'Down-Left':
      //   this.xSpeed = -scale + this.multiplier;
      //   this.ySpeed = scale + this.multiplier;
      //   break;
      // case 'Down-Right':
      //   this.xSpeed = scale + this.multiplier;
      //   this.ySpeed = scale + this.multiplier;
      //   break;
      // case 'RestX':
      //   this.xSpeed = 0;
      //   break;
      // case 'RestY':
      //   this.ySpeed = 0;
      //   break;
      case 'w':
        this.xSpeed = 0;
        this.ySpeed = -scale + this.multiplier;
        break;
      case 's':
        this.xSpeed = 0;
        this.ySpeed = scale + this.multiplier;
        break;
      case 'a':
        this.xSpeed = -scale + this.multiplier;
        this.ySpeed = 0;
        break;
      case 'd':
        this.xSpeed = scale + this.multiplier;
        this.ySpeed = 0;
        break;
    }
  };

  this.eat = function (fruit) {
    return (this.x < fruit.x + scale && this.x > fruit.x - scale) && (this.y < fruit.y + scale && this.y > fruit.y - scale);
  };

  this.checkCollision = () => {
    for (let i = 0; i < this.tail.length; i++) {
      if (this.x === this.tail[i].x && this.y === this.tail[i].y) {
        console.log('----- RESTART -----');
        ScoreTag.innerText = 'game over';
        stats['score'] = 0;
        stats['try']++;
        head = getRandomColor();
        body = getRandomColor();
        fruit.color = getRandomColor();
        this.total = 0;
        this.tail = [];
        this.multiplier = 0;
        timeout = 0;
      }
    }
  };
}