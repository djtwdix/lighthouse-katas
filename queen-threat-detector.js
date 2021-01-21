let whiteQueen = [3, 3];
let blackQueen = [5, 5];

const generateBoard = function (loc1, loc2) {
  let board = [];
  let isThreat = false;
  //create empty board
  for (let i = 0; i < 8; i++) {
    board.push(new Array(8).fill(0));
  }
  //iterate over board to place Queen's at given location
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      if (r === loc1[0] && c === loc1[1]) {
        board[r].splice(c, 1, 1);
      }
      if (r === loc2[0] && c === loc2[1]) {
        board[r].splice(c, 1, 1);
      }
    }
  }
  // if row or column match on Queen's location they are a threat
  if (loc1[0] === loc2[0] || loc1[1] === loc2[1]) {
    isThreat = true;
  }
  // if difference between row location of Queen's is same as difference between 
  // column position of Queen's they are a threat
  if (Math.abs(loc1[0] - loc2[0]) === Math.abs(loc1[1] - loc2[1])) {
    isThreat = true;
  }
  //log board and return isThreat
  console.log(board)
  return isThreat;
}

//check
console.log(generateBoard(whiteQueen, blackQueen));
