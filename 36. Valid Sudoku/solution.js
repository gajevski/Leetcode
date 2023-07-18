const isValidSudoku = (board) => {
  const set = new Set();

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      const cell = board[i][j];

      if (cell === ".") continue;

      const boxNumber = 3 * Math.floor(i / 3) + Math.floor(j / 3);
      const row = `row: ${i}, value: ${cell}`;
      const column = `column ${j}, value: ${cell}`;
      const box = `box: ${boxNumber}, value: ${cell}`;

      if (set.has(row) || set.has(column) || set.has(box)) return false;

      set.add(row);
      set.add(column);
      set.add(box);
    }
  }

  return true;
};
