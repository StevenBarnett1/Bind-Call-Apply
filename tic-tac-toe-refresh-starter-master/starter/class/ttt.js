const Screen = require("./screen");
const Cursor = require("./cursor");

class TTT {

  constructor() {

    this.playerTurn = "O";

    this.grid = [[' ',' ',' '],
                 [' ',' ',' '],
                 [' ',' ',' ']]

    this.cursor = new Cursor(3, 3);

    // Initialize a 3x3 tic-tac-toe grid
    Screen.initialize(3, 3);
    Screen.setGridlines(true);

    // Replace this with real commands
    Screen.addCommand('t', 'test command (remove)', TTT.testCommand);

    Screen.render();
  }

  // Remove this
  static testCommand() {
    console.log("TEST COMMAND");
  }

  static playerWinVertical(grid){
    for (let row = 0 ; row < 3 ; row++) {
    if (grid[row][0] !== ' ' &&
        grid[row][0] === grid[row][1] &&
        grid[row][0] === grid[row][2])
        {
      return grid[row][0]
    }
  }
  }

  static playerWinHorizontal(grid) {
    for (let col = 0 ; col < 3 ; col++) {
    if (grid[0][col] !== ' ' &&
        grid[0][col] === grid[1][col] &&
        grid[0][col] === grid[2][col])
    {
      return grid[0][col];
    }
  }
  }

  static fullBoard(grid){
    let valid = true
    grid.forEach(row => {
      row.forEach(ele => {
      if (ele === ' ') valid = false})
    })
    return valid
  }

  static playerWinDiagonal(grid) {
    if(grid[1][1] === ' ') return false

    if((grid[1][1] === grid[0][0] &&
      grid[1][1] === grid[2][2]) || (grid[2][0] ===
        grid[1][1] && grid[0][2] === grid[1][1])) return grid[1][1]
      return false
  }

  static checkWin(grid) {
    //console.log('THERE IS NO WINNER', grid)

    if (!TTT.playerWinDiagonal(grid) && !TTT.playerWinHorizontal(grid) &&
    !TTT.playerWinVertical(grid) && TTT.fullBoard(grid)) return 'T'

    if (TTT.playerWinDiagonal(grid)) return TTT.playerWinDiagonal(grid)
    if (TTT.playerWinHorizontal(grid)) return TTT.playerWinHorizontal(grid)
    if (TTT.playerWinVertical(grid)) return TTT.playerWinVertical(grid)
    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended
    return false
  }

  static endGame(winner) {
    if (winner === 'O' || winner === 'X') {
      Screen.setMessage(`Player ${winner} wins!`);
    } else if (winner === 'T') {
      Screen.setMessage(`Tie game!`);
    } else {
      Screen.setMessage(`Game Over`);
    }
    Screen.render();
    Screen.quit();
  }

}

module.exports = TTT;
