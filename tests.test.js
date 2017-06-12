var ttt = require('./logic');

test('this.winner() should find winner in diagonal', function(){
  var t = new ttt();
  t.board = [['X',,], [,'X',],[,,'X']];
  expect(t.winner()).toBe('X');
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