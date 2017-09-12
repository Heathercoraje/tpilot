var test = require('tape');

function multi(a, b) {
  return a * b;
}

test('multi means mutiply', function(t) {
  t.equal(4, multi(2, 2), 'should return 4');
  t.end();
})
