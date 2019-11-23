function AiOld() {
  setup();
  let position = {
    before: [0, 0],
    current: [0, 0],
    direction: '',
    tail: [],
  };
  const moveArr = ['Up', 'Down', 'Left', 'Right',];

  position['direction'] = 'Right';

  AiLog();

  // while (!(position['current'][0] < fruit.x + 15 && position['current'][0] > fruit.x - 15)) {
  //   let rndIndex = Math.floor(Math.random() * moveArr.length - 2);
  //   let rndMove = moveArr[rndIndex];
  //   console.log(rndMove);
  //   snake.changeDirection(rndMove);
  // }

  setInterval(() => {
    let tailX = [];
    let tailY = [];
    TailTray();
    // console.log = function() {};

    // console.log(snake.x, snake.y);
    // checkBody();
    // let food = [fruit.x, fruit.y];
    // console.log(fooX, fooY);

    let fooX = fruit.x;
    let fooY = fruit.y;

    let posX = position['current'][0];
    let posY = position['current'][1];

    let befX = position['before'][0];
    let befY = position['before'][1];

// if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y) {

    // closerX(posX, befX, fooX);
    // CheckCol();
    // console.log(position['direction']);
    // console.log(posY,befY);
    console.log(checkSafe());
    if (posX === fooX) {
      // position['direction'] = 'RestX';
      if (posY < fooY) {
        // if (posY - scale && tailY.indexOf(posY) === -1)
        if (posY + scale !== befY && checkSafe() !== 'DOWN')
          position['direction'] = 'Down';
      }
      if (posY > fooY) {
        // if (posY + scale && tailY.indexOf(posY) === -1)
        if (posY - scale !== befY && checkSafe() !== 'UP')
          position['direction'] = 'Up';
      }
    } else {
      if (posX > fooX) {
        // if (posX - scale && tailX.indexOf(posX) === -1)
        if (posX + scale !== befX && checkSafe() !== 'LEFT')
          position['direction'] = 'Left';
      }
      if (posX < fooX) {
        // if (posX + scale && tailX.indexOf(posX) === -1)
        if (posX - scale !== befX && checkSafe() !== 'RIGHT')
          position['direction'] = 'Right';
      }
    }
    if (posY === fooY) {
      // position['direction'] = 'RestY';
      if (posX > fooX) {
        // if (posX - scale && tailX.indexOf(posX) === -1)
        if (posX + scale !== befX && checkSafe() !== 'LEFT')
          position['direction'] = 'Left';
      }
      if (posX < fooX) {
        // if (posX + scale && tailX.indexOf(posX) === -1)
        if (posX - scale !== befX && checkSafe() !== 'RIGHT')
          position['direction'] = 'Right';
      }
    } else {
      if (posY < fooY) {
        // if (posY - scale && tailY.indexOf(posY) === -1)
        if (posY + scale !== befY && checkSafe() !== 'DOWN')
          position['direction'] = 'Down';
      }
      if (posY > fooY) {
        // if (posY + scale && tailY.indexOf(posY) === -1)
        if (posY - scale !== befY && checkSafe() !== 'UP')
          position['direction'] = 'Up';
      }
    }
    // if (posX + scale < fooX + scale && posX + scale > fooX - scale) {
    //   console.log('Down');
    //   position['direction'] = 'Down';
    // }
    // if (posY + scale < fooY + scale && posY + scale > fooY - scale) {
    //   console.log('Left');
    //   position['direction'] = 'Left';
    // }
    // if (posX - scale > fooX - scale && posX - scale < fooX - scale) {
    //   console.log('Up');
    //   position['direction'] = 'Up';
    // }
    // if (posY - scale < fooY + scale && posY - scale > fooY - scale) {
    //   console.log('Right');
    //   position['direction'] = 'Right';
    // }
    // if (posY + scale < fooY - scale && posY + scale > fooY - scale) {
    //   position['direction'] = 'Right';
    // }
    // console.log(posX,posY,' ',fooX,fooY);
    // CheckCol();

    // if (position['priority'] !== '') {
    //     snake.changeDirection(position['priority']);
    // } else

    // console.log(position['tail']);

    // if (checkSafe() !== '') {
    //   position['direction'] = checkSafe();
    // }

    // console.log('------', position['direction']);
    snake.changeDirection(position['direction']);

    function TailTray() {
      for (let i = 0; i < snake.tail.length; i++) {
        if (i !== 0) {
          tailX.push(snake.tail[i].x);
          tailY.push(snake.tail[i].y);
        }
      }
    }

    function checkSafe() {
      for (let i = 0; i < snake.tail.length; i++) {
        if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y)
          return 'RIGHT';
        // console.log('1 Condition: RIGHT');
        if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y)
          return 'LEFT';
        // console.log('2 Condition: LEFT');
        if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y)
          return 'UP';
        // console.log('3 Condition: UP');
        if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y)
          return 'DOWN';
        // console.log('4 Condition: DOWN');

        // if (position['direction'] === 'Left') {
        //   console.log('Condition: LEFT');
        //   if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Left
        //     if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Right
        //       if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y) { // Down
        //         if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y) { // Up
        //         } else {
        //           snake.changeDirection(position['Up']);
        //           return 'Up';
        //         }
        //       } else {
        //         snake.changeDirection(position['Down']);
        //         return 'Down';
        //       }
        //     } else {
        //       snake.changeDirection(position['Right']);
        //       return 'Right';
        //     }
        //   }
        // }
        //
        // if (position['direction'] === 'Down') {
        //   console.log('Condition: DOWN');
        //   if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y) { // Down
        //     if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Right
        //       if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y) { // Up
        //         if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Left
        //         } else {
        //           snake.changeDirection(position['Left']);
        //           return 'Left';
        //         }
        //       } else {
        //         snake.changeDirection(position['Up']);
        //         return 'Up';
        //       }
        //     } else {
        //       snake.changeDirection(position['Right']);
        //       return 'Right';
        //     }
        //   }
        // }
        //
        // if (position['direction'] === 'Up') {
        //   console.log('Condition: UP');
        //   if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y) { // Up
        //     if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Left
        //       if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y) { // Down
        //         if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y) { // Right
        //         } else {
        //           snake.changeDirection(position['Left']);
        //           return 'Left';
        //         }
        //       } else {
        //         snake.changeDirection(position['Down']);
        //         return 'Down';
        //       }
        //     } else {
        //       snake.changeDirection(position['Right']);
        //       return 'Right';
        //     }
        //   }
        // }


        // if (position['direction'] === 'Left') {
        //   if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y) {
        //     snake.changeDirection(position['Right']);
        //     // console.log('DANGER LEFT');
        //     return 'Right';
        //   }
        // }
        // if (position['direction'] === 'Up') {
        //   if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y) {
        //     snake.changeDirection(position['Down']);
        //     // console.log('DANGER UP');
        //     return 'Down';
        //   }
        // }
        // if (position['direction'] === 'Down') {
        //   if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y) {
        //     snake.changeDirection(position['Up']);
        //     // console.log('DANGER DOWN');
        //     return 'Up';
        //   }
        // }
      }
    }


    // if ( (posY < fooY) && (posX > fooX) ) {
    //   console.log('Down, Left');
    //   snake.changeDirection('Down-Left');
    // }
    // if ( (posY < fooY) && (posX > fooX) ) {
    //   console.log('Down, Right');
    //   snake.changeDirection('Down-Right');
    // }
    //
    // if ( (posY > fooY) && (posX > fooX) ) {
    //   console.log('Up, Left');
    //   snake.changeDirection('Down-Left');
    // }
    // if ( (posY > fooY) && (posX > fooX) ) {
    //   console.log('Up, Right');
    //   snake.changeDirection('Down-Right');
    // }

    // if (posX + scale < fruit.x + scale && posX + scale > fruit.x - scale) {
    //   console.log('Down');
    //   snake.changeDirection('Down');
    // }
    // if (posY + scale < fruit.y + scale && posY + scale > fruit.y - scale) {
    //   console.log('Left');
    //   snake.changeDirection('Left');
    // }
    // if (posX - scale < fruit.x + scale && posX - scale > fruit.x - scale) {
    //   console.log('Up');
    //   snake.changeDirection('Up');
    // }
    // if (posY - scale < fruit.y + scale && posY - scale > fruit.y - scale) {
    //   console.log('Right');
    //   snake.changeDirection('Right');
    // }
    calculatePos();
    // console.log(position['before']);
    // console.log(position['current']);
    // console.log(position['direction']);
    // closer();

    // position['direction'] = randomElement;
    // console.log(position['direction']);
    // console.log(closer());
    // getCloser();
    // console.log(fruit.x, fruit.y);

  }, timeout / 10);

  // function CheckCol() {
  //   for (let i = 0; i < snake.tail.length; i++) {
  //     if (position['direction'] === 'Right') {
  //       if (snake.x + scale === snake.tail[i].x && snake.y === snake.tail[i].y) {
  //         snake.changeDirection(position['Left']);
  //         console.log('DANGER RIGHT');
  //         position['priority'] = 'Left';
  //       }
  //     } else
  //     if (position['direction'] === 'Left') {
  //       if (snake.x - scale === snake.tail[i].x && snake.y === snake.tail[i].y) {
  //         snake.changeDirection(position['Right']);
  //         console.log('DANGER LEFT');
  //         position['priority'] = 'Right';
  //       }
  //     } else
  //     if (position['direction'] === 'Up') {
  //       if (snake.x === snake.tail[i].x && snake.y - scale === snake.tail[i].y) {
  //         snake.changeDirection(position['Down']);
  //         console.log('DANGER UP');
  //         position['priority'] = 'Down';
  //       }
  //     } else
  //     if (position['direction'] === 'Down') {
  //       if (snake.x === snake.tail[i].x && snake.y + scale === snake.tail[i].y) {
  //         snake.changeDirection(position['Up']);
  //         console.log('DANGER DOWN');
  //         position['priority'] = 'Up';
  //       }
  //     } else {
  //       position['priority'] = '';
  //     }
  //   }
  // }

  function checkBody() {
    for (let i = 0; i < snake.tail.length; i++) {
      if (snake.x + scale === snake.tail[i].x && snake.y + scale === snake.tail[i].y) {
        // console.log('+ ');
      }
      if (snake.x - scale === snake.tail[i].x && snake.y - scale === snake.tail[i].y) {
        // console.log('- ');
      }
    }
  }

  function closerX(posX, befX, fooX) {
    let counts = [posX, befX],
      goal = fooX;

    let clossest = counts.reduce(function (prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    console.log(clossest, posX, befX, fooX);
  }

  function closerY(posY, befY, fooY) {
    let counts = [posY, befY],
      goal = fooY;

    let clossest = counts.reduce(function (prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    console.log(clossest, posY, befY, fooY);
    return clossest;
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

  function getCloser() {
    let countX = [position['current'][0], position['before'][0]],
      goalX = fruit.x;

    let clossetX = countX.reduce(function (prev, curr) {
      return (Math.abs(curr - goalX) < Math.abs(prev - goalX) ? curr : prev);
    });

    let countY = [position['current'][1], position['before'][1]],
      goalY = fruit.y;

    let clossetY = countY.reduce(function (prev, curr) {
      return (Math.abs(curr - goalY) < Math.abs(prev - goalY) ? curr : prev);
    });

    // console.log('closer  ' + clossetX, clossetY);
  }

  function AiLog() {
    document.querySelector('#ai').style.display = 'none';
    document.querySelector('#aiOld').style.display = 'none';

    // Disable Collision Checker ( Debug )
    // snake.checkCollision = () => {};

    let node = document.createElement("span");
    node.setAttribute("id", "AiTag");
    // let text = document.createTextNode("Autopilot: ON");
    node.innerText = 'Autopilot: ON';
    // node.appendChild(text);
    document.querySelector('.stats').appendChild(node);
  }

  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    document.querySelector('#MobPlay').style.display = 'none';
  }
}