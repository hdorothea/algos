// write a function to determine if a given number is prime

function isPrime(n) {
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i <= limit; i++) {
    if (n % i === 0){
      return false;
    }
  }
  return n > 1;
}

console.log(isPrime(1));
