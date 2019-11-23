const canvas = document.querySelector('#game');
const ctx = canvas.getContext("2d");

let viewpoint = getViewportSize();
canvas.width = Math.floor(viewpoint['width']);
canvas.height = Math.floor(viewpoint['height']);
console.log('Resolution:', canvas.width, canvas.height);

const scale = Math.floor((canvas.width + canvas.height) / 50);
const rows = canvas.height / scale;
const columns = canvas.width / scale;

const stats = {'score': 0, 'maxscore': 0, 'try': 0};

const MaxScoreTag = document.querySelector('#maxscore');
const ScoreTag = document.querySelector('#score');

let snake;
let fruit;
let timeout = 100;

pre();

let executed = false;
window.addEventListener('keydown', (() => {
  if (!executed) {
    setup();
    executed = true;
  }
  document.querySelector('#ai').style.display = 'none';
  document.querySelector('#aiOld').style.display = 'none';
}));

function pre() {
  snake = new Snake();
  fruit = new Fruit();
  fruit.color = getRandomColor();
  fruit.pickLocation();
  ScoreTag.innerHTML = 'Press any <strong>button</strong>';
}

function setup() {
  window.setInterval(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fruit.draw();
    snake.update();
    snake.draw();

    if (snake.eat(fruit)) {
      fruit.pickLocation();
      snake.total++;
      stats['score'] = snake.total;
      fruit.color = getRandomColor();
      // timeout -= 30;
      // snake.multiplier += 1;
      // console.log(scale + snake.multiplier);
    }

    snake.checkCollision();
    ScoreTag.innerText = stats['score'];

    if (stats['score'] > stats['maxscore']) {
      stats['maxscore'] = stats['score'];
    }
    if (stats['try'] >= 1) {
      MaxScoreTag.innerText = stats['maxscore'];
    }

  }, timeout );

}

window.addEventListener('keydown', ((evt) => {
  const direction = evt.key.replace('Arrow', '');
  snake.changeDirection(direction);
}));