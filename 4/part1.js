const fs = require("fs");

const bingo = fs.readFileSync(`${__dirname}/bingo.txt`, "utf8").split("\n\n");

const drawnNumbers = bingo[0].split(",");

bingo.shift();

const boards = [];

bingo.forEach((board) => {
  const rows = board.split("\n");

  boards[boards.length] = [];

  rows.forEach((row) => {
    boards[boards.length - 1].push(
      row
        .split(" ")
        .filter((number) => number != "")
        .map((number) => number)
    );
  });
});

for (let i = 0; i < drawnNumbers.length; i++) {
  const drawnNumber = drawnNumbers[i];

  for (let boardNo = 0; boardNo < boards.length; boardNo++) {
    for (let rowNo = 0; rowNo < boards[boardNo].length; rowNo++) {
      for (
        let numberNo = 0;
        numberNo < boards[boardNo][rowNo].length;
        numberNo++
      ) {
        if (boards[boardNo][rowNo][numberNo] === drawnNumber) {
          boards[boardNo][rowNo][numberNo] = null;
        }
      }
    }
  }

  let won = false;

  boards.forEach((board) => {
    if (isBoardWinner(board)) {
      const total = board.reduce((boardTotal, row) => {
        const rowTotal = row.reduce((rowTotal, number) => {
          if (number !== null) {
            rowTotal += parseInt(number);
          }

          return rowTotal;
        }, 0);

        return boardTotal + rowTotal;
      }, 0);

      console.log(`Winning Board Total: ${total*drawnNumber}`);

      won = true;
    }
  });

  if (won) {
    break;
  }
}

function isBoardWinner(board) {
  const rowsWon = [true, true, true, true, true];

  const columnsWon = [true, true, true, true, true];

  for (let rowNo = 0; rowNo < board.length; rowNo++) {
    for (let numberNo = 0; numberNo < board[rowNo].length; numberNo++) {
      if (board[rowNo][numberNo] !== null) {
        rowsWon[rowNo] = false;
        columnsWon[numberNo] = false;
      }
    }
  }

  for (let i = 0; i < rowsWon.length; i++) {
    if (rowsWon[i]) {
      return true;
    }
  }

  for (let i = 0; i < columnsWon.length; i++) {
    if (columnsWon[i]) {
      return true;
    }
  }

  return false;
}
