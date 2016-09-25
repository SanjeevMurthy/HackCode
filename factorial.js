

var variadic = require('allong.es').variadic,
    bigInt = require("big-integer");

var trampoline = function (fn) {
  return variadic( function (args) {
    var result = fn.apply(this, args);

    while (result instanceof Function) {
      result = result();
    }

    return result;
    
  });
};

function factorial (n) {
  var _factorial = trampoline( function myself (acc, n) {
    return n.greater(0)
    ? function () { return myself(acc.times(n), n.minus(1)); }
    : acc
  });
  
  return _factorial(bigInt.one, bigInt(n));
}

factorial(10).toString()
  //=> '3628800'
factorial(32768)