// write a curried add function

function curriedAdd(a) {
  return b => a + b;
}

console.log(curriedAdd(2)(5));

// How would you make this work
// add(2, 5); // 7
// add(2)(5); // 7

function add(a, b) {
  if (b === undefined) {
    return c => a + c;
  } else {
    return a + b;
  }
}

console.log(add(2)(5));
console.log(add(2, 5));