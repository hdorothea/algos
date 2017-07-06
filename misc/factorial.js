// write a function that returns the factorial of a given number

function factorial(n) {
  if (n <= 0) {
    return '';
  }
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(4));
