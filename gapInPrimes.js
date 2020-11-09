function gap(g, m, n) {
  let pair = [];
  // Create list of primes up to n
  let primes = getPrimes(n);

  while (primes[0] < m) {
    primes.shift();
  }

  // Search m to n for a gap of g
  for (var i = 0; i < primes.length; i++) {
    if (primes[i+1] - primes[i] === g) {
      pair.push(primes[i], primes[i+1]);
      return pair;
    }
  }
  // Push the two numbers into the pair array
  if (pair.length < 2) {
    return null
  }
  return pair;
}

var getPrimes = (end) => {
  let primes = [2];
  let count = 3;

  if (end < 2) {
    return [];
  }

  while (count <= end) {
    if (isPrime(count)) {
      primes.push(count);
    }
    count++;
  }

  return primes;
}

var isPrime = (num) => {
  for (var i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// g is gap
// m is start inclusive
// n is end inclusive

// Return first pair of two prime numbers []