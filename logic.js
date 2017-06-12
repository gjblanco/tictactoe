var TTTGame = function() {
  this.board = [[,,],[,,],[,,]]; // 3 x 3 undefined
  this.positions = undefined; // array of positions [board, winner]
};

TTTGame.prototype.winner = function(){
  for(var i = 0; i < 3; i++) {
    if(this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2])
      return this.board[i][0];
    if(this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i])
      return this.board[0][i]; 
  }
  if(this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2])
    return this.board[0][0];
  if(this.board[0][2] === this.board[1][1] && this.board[1][1] === this.board[2][0])
    return this.board[0][2];
  return undefined;
};

TTTGame.prototype.turn = function() {
  var x = 0, o = 0;
  console.log(this.board);
  for(var i = 0; i < 3; i++)
    for(var j = 0; j < 3; j++) {
      x += (this.board[i][j] === 'X'? 1 : 0);
      o += (this.board[i][j] === 'O'? 1 : 0);
    }
  console.log(x, o)
  return x > o? 'O' : 'X';
}

TTTGame.prototype.addMove = function(i, j) {
  if(this.board[i] === undefined || this.board[i][j] !== undefined) {
    throw 'Invalid Move';
  }
  var turn = this.turn();
  this.board[i][j] = turn;
  if(this.winner() === turn) {
    return turn + ' won!';
  }
  else return this.turn() + '\'s turn';
} 

TTTGame.prototype.getBoard = function() {
  return [this.board[0].slice(), this.board[1].slice(), this.board[2].slice()];
}

module.exports = TTTGame;

// TTTGame.prototype.move = function() {
//   var turn = this.turn();
//   var enemy = (turn === 'X'? 'O' : 'X');
//   if(this.positions === undefined) {
//     for(var )
//   }
// }