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

  static playerWinHorizontal(){

    if ((this.grid[0][0] === this.grid[0][1] &&
      this.grid[0][1] === this.grid[0][2]) || (this.grid[1][0] ===
        this.grid[1][1] && this.grid[1][2] === this.grid[1][1]) || this.grid[2][0] === this.grid[2][1] &&
      this.grid[2][2] === this.grid[2][1]) return this.grid[1][1]
    return false
  }

  static playerWinVertical() {
    for(let i =0;i<3;i++){
      if ((this.grid[1][0] === this.grid[0][0] &&
        this.grid[2][0] === this.grid[1][0]) || (this.grid[1][0] ===
          this.grid[1][1] && this.grid[2][1] === this.grid[1][1]) || this.grid[0][2] === this.grid[1][2] &&
        this.grid[2][2] === this.grid[2][1])
    }

    return false
  }

  static fullBoard(){

    this.grid.forEach(row => {
      let count = 0
      row.forEach(ele => {
        if (ele === mark) count++
      })
      if (count === 3) return true
    })
    return false
  }

  static playerWinDiagonal() {
    if(!this.grid[1][1])return false

    if((this.grid[1][1] === this.grid[0][0] &&
      this.grid[1][1] === this.grid[2][2]) || (this.grid[2][0] ===
        this.grid[1][1] && this.grid[0][2] === this.grid[1][1])) return this.grid[1][1]
      return false
  }

  static checkWin(grid) {
    if(TTT.playerWinHorizontal("X") || TTT.playerWinVertical("X")) return "X"
    if(TTT.playerWinHorizontal("O") || TTT.playerWinVertical("O")) return "O"
    if (TTT.playerWinDiagonal()) return TTT.playerWinDiagonal()


    // Return 'X' if player X wins
    // Return 'O' if player O wins
    // Return 'T' if the game is a tie
    // Return false if the game has not ended

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
