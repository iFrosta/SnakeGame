function Ai() {
  setup();
  let position = {
    before: [0, 0],
    current: [0, 0],
    direction: '',
    tail: [],
  };

  position['direction'] = 'Right';

  AiLog();
  setInterval(() => {
    calculatePos();
    let fooX = fruit.x;
    let fooY = fruit.y;

    let posX = position['current'][0];
    let posY = position['current'][1];

    let befX = position['before'][0];
    let befY = position['before'][1];

    let NotSafe = checkSafe();
    let response = EmergencyResp(NotSafe);

    // console.log(NotSafe);
    // console.log(response);

    if (response.length <= 2) {
      if (response.length === 2) {
        position['direction'] = response[Math.floor(Math.random() * response.length)];
      } else if (response.length === 1) {
        position['direction'] = response[0];
      }
      // console.log(position['direction']);
    } else {
      if (posX === fooX) {
        // position['direction'] = 'RestX';
        if (posY < fooY) {
          if (posY + scale !== befY && NotSafe.indexOf('Down') === -1)
            position['direction'] = 'Down';
        }
        if (posY > fooY) {
          if (posY - scale !== befY && NotSafe.indexOf('Up') === -1)
            position['direction'] = 'Up';
        }
      } else {
        if (posX > fooX) {
          if (posX + scale !== befX && NotSafe.indexOf('Left') === -1)
            position['direction'] = 'Left';
        }
        if (posX < fooX) {
          if (posX - scale !== befX && NotSafe.indexOf('Right') === -1)
            position['direction'] = 'Right';
        }
      }
      if (posY === fooY) {
        // position['direction'] = 'RestY';
        if (posX > fooX) {
          if (posX + scale !== befX && NotSafe.indexOf('Left') === -1)
            position['direction'] = 'Left';
        }
        if (posX < fooX) {
          if (posX - scale !== befX && NotSafe.indexOf('Right') === -1)
            position['direction'] = 'Right';
        }
      } else {
        if (posY < fooY) {
          if (posY + scale !== befY && NotSafe.indexOf('Down') === -1)
            position['direction'] = 'Down';
        }
        if (posY > fooY) {
          if (posY - scale !== befY && NotSafe.indexOf('Up') === -1)
            position['direction'] = 'Up';
        }
      }
    }

    snake.changeDirection(position['direction']);
  }, timeout / 2);

  function checkSafe() {
    let NotSafe = [];
    for (let i = 0; i < snake.tail.length; i++) {
      if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y)
        NotSafe.push('Right');
      if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y)
        NotSafe.push('Left');
      if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y)
        NotSafe.push('Up');
      if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y)
        NotSafe.push('Down');
    }
    return NotSafe;
  }

  function EmergencyResp(NotSafe) {
    let Response = ['Left', 'Right', 'Up', 'Down'];
    if (NotSafe.indexOf('Left') !== -1) {
      Response.splice(Response.indexOf('Left'), 1);
    }
    if (NotSafe.indexOf('Right') !== -1) {
      Response.splice(Response.indexOf('Right'), 1);
    }
    if (NotSafe.indexOf('Up') !== -1) {
      Response.splice(Response.indexOf('Up'), 1);
    }
    if (NotSafe.indexOf('Down') !== -1) {
      Response.splice(Response.indexOf('Down'), 1);
    }
    return Response;
  }

  function calculatePos() {
    switch (position['direction']) {
      case 'Up':
        position['before'] = [snake.x, snake.y - scale];
        position['current'] = [snake.x, snake.y];
        break;
      case 'Down':
        position['before'] = [snake.x, snake.y + scale];
        position['current'] = [snake.x, snake.y];
        break;
      case 'Left':
        position['before'] = [snake.x + scale, snake.y];
        position['current'] = [snake.x, snake.y];
        break;
      case 'Right':
        position['before'] = [snake.x - scale, snake.y];
        position['current'] = [snake.x, snake.y];
        break;
    }
  }

  function AiLog() {
    document.querySelector('#ai').style.display = 'none';
    document.querySelector('#aiOld').style.display = 'none';

    // Disable Collision Checker ( Debug )
    // snake.checkCollision = () => {};
    // console.log = function() {};

    let node = document.createElement("span");
    node.setAttribute("id", "AiTag");
    node.innerText = 'Autopilot: ON';
    document.querySelector('.stats').appendChild(node);
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('#MobPlay').style.display = 'none';
  }
}