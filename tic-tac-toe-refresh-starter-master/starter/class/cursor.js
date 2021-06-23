const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
  }

  up() {
    // Move cursor up
  }

  down() {
    Screen.addCommand('down', 'Move down', () => {
      if(this.col < 3) this.col ++
      else this.col = 0
    })
    console.log('COMMANDS', Screen.printCommands())

    // Move cursor down
  }

  left() {
    // Move cursor left
  }

  right() {
    // Move cursor right
  }

}


module.exports = Cursor;
