var ttt = require('./logic');

test('this.winner() should find winner in diagonal', function(){
  var t = new ttt();
  t.board = [['X',,], [,'X',],[,,'X']];
  expect(t.winner()).toBe('X');
});
test('this.winner() should find winner in row', function(){
  var t = new ttt();
  t.board = [['X',,],['X',,],['X',,]];
  expect(t.winner()).toBe('X');
});
test('this.turn should return X when the board is empty', function(){
  var t = new ttt();
  expect(t.turn()).toBe('X');
});
test('this.turn should return O if one move has been made', function(){
  var t = new ttt();
  t.addMove(0,0)
  expect(t.turn()).toBe('O');
});
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });
// test('adds 1 + 2 to equal 3', function(){

// });