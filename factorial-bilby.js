var B = require('bilby'),
    cont = B.cont,
    done = B.done,
    trampoline = B.trampoline,bigInt = require("big-integer");
    
function factorial (n) {
  var _factorial =  function myself (acc, n) {
    return n.greater(0)
    ? cont( function () { return myself(acc.times(n), n.minus(1)); })
    : done( acc )
  };
  
  return trampoline( _factorial(bigInt.one, bigInt(n)) );
}

factorial(10).toString();
  //=> '3628800'
var ans=factorial(10);
console.log("Answer :",ans);
  //=> GO FOR LUNCH