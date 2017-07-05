// print all prime numbers up to n

function printPrimesPrimitive(n) {
  if (n <= 1) {
    return '';
  }

  for (let currentChecked = 2; currentChecked <= n; currentChecked++) {
    let prime = true;
    const currentLimit = Math.floor(Math.sqrt(currentChecked));
    for (let decremented = currentLimit; decremented > 1; decremented--) {
      if (currentChecked % decremented === 0) {
        prime = false;
        break;
      }
    }
    if (prime) {
      console.log(currentChecked);
    }
  }
}

function printPrimes(n) {
  if (n <= 1) {
    return '';
  }

  const isPrime = [false, false];
  for (let i = 2; i < n + 1; i++) {
    isPrime.push(true);
  }

  const limit = Math.floor(Math.sqrt(n));
  for (let i = 2; i < isPrime.length; i++) {
    if (isPrime[i]) {
      console.log(i);
      if (i <= limit) {
        for (let u = 2; u * i < isPrime.length; u++) {
          isPrime[u * i] = false;
        }
      }
    }
  }
}

printPrimes(17);
printPrimesPrimitive(115);
