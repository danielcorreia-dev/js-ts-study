const compose = (functions) => {
  return functions.reduceRight((prev, next) => {
    return (x) => {
      return next(prev(x));
    }
  })
};

let funcs = compose([(x) => x + 1, (x) => x * x, (x) => 2 * x]);
console.log(funcs(4));
