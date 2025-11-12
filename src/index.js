function knightMoves(initial, goal) {
  const mapBoolean = Array.from({ length: 7 }, () => Array(7).fill(0));
  return findGoal(initial, goal, mapBoolean);
}

function findGoal(initial, goal, map) {
  const moves = [
    [1, 2],
    [2, 1],
    [2, -1],
    [1, -2],
    [-1, -2],
    [-2, -1],
    [-2, 1],
    [-1, 2],
  ];

  let queue = [[initial[0], initial[1], 0, [[initial[0], initial[1]]]]];
  map[initial[0]][initial[1]] = 1;

  while (queue.length > 0) {
    const [x, y, move, path] = queue.shift();

    if (x === goal[0] && y === goal[1]) {
      return `You made it in ${move} moves! Here's your path: ${JSON.stringify(path)}`;
    }

    for (const [nextX, nextY] of moves) {
      let nextPositionX = x + nextX;
      let nextPositionY = y + nextY;

      if (
        nextPositionX >= 0 &&
        nextPositionX < 7 &&
        nextPositionY >= 0 &&
        nextPositionY < 7 &&
        map[nextPositionX][nextPositionY] === 0
      ) {
        map[nextPositionX][nextPositionY] = 1;
        const newPath = [...path, [nextPositionX, nextPositionY]];
        queue.push([nextPositionX, nextPositionY, move + 1, newPath]);
      }
    }
  }

  return -1;
}

window.knightMoves = knightMoves;
