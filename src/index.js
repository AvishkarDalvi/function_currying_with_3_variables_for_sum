function sum(a, b, c) {
  return a + b + c;
}

function curry(sum) {
  //Implement here

  return function add() {
    let args = [].slice.apply(arguments);
    function adder() {
      args = args.concat([].slice.apply(arguments));
      if (args.length >= 3) {
        return () => sum(args[0], args[1], args[2]);
      }
      return adder;
    }
    return adder();
  };
}
let curriedSum = curry(sum);
console.log(curriedSum(1, 2, 3)());
console.log(curriedSum(3)(2)(1)());
console.log(curriedSum(3, 2)(1)());
console.log(curriedSum(3)(2, 1)());
console.log(curriedSum(3, 2)(1)());
