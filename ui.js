var sys = require('sys')
var exec = require('child_process').exec;

var TTTGame = require('./logic');

var stdin = process.openStdin();

var ui = {
  game: new TTTGame(),
  stateMessage: 'X\'s turn',
  errorMessage: '',
  drawBoard: function() {
    var board = this.game.getBoard();
    for(var i = 0; i < 3; i++) {
      var line = '';
      for(var j = 0; j < 3; j++) {
        line += (board[i][j] === undefined? ' ' : board[i][j]);
      }
      console.log(line);
    }
  },
  drawGameState: function() {
    process.stdout.write('\x1Bc'); 
    this.drawBoard();
    console.log(this.stateMessage);
    console.log(this.errorMessage);
    if(!this.stateMessage.includes('won')) {
      console.log('Insert a valid move for', ui.game.turn(), 
        ' in the format "row, column" without the quotes');
    } else {
      console.log('starting new game...')
      setTimeout(function(){
        ui.game = new TTTGame();
        ui.stateMessage = 'X\'s turn';
        ui.errorMessage = '';
        ui.drawGameState();
      }, 3000)
    }
  },
  addMove: function(i, j) {
    try {
      var message = ui.game.addMove(i, j);
      ui.stateMessage = message;
    } catch(err) {
      ui.errorMessage = (err);
    }
    ui.drawGameState();
  }
};


ui.drawGameState();

stdin.addListener('data', function(d) {
  var input = d.toString().trim().split(',').map(function(mov) { return mov.trim(); });
  var message;
  ui.addMove(input[0], input[1]);
})
