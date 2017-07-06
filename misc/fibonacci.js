// write a function that returns the nth fibbonaci number
const fibMem = {};

let count = 0;
function fibbonaci(n) {
  if (n === 1) {
    return 1;
  }

  if (n === 2) {
    return 1;
  }
  ++count;
  if (!fibMem[n]) {
    fibMem[n] = fibbonaci(n - 2) + fibbonaci(n - 1);
  }

  return fibMem[n];
}

// 11235813
console.log(fibbonaci(7));
console.log(count);
