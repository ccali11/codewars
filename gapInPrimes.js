function gap(g, m, n) {
  let pair = [];

  // Create list of primes up to n
  let primes = getPrimes(m, n);

  if (primes.length < 2) {
    return null;
  }

  // Search primes for a gap of g
  for (var i = 0; i < primes.length; i++) {
    if (primes[i+1] - primes[i] === g) {
      // Push the two numbers into the pair array
      pair.push(primes[i], primes[i+1]);
      return pair;
    }
  }

  return null;
}

var getPrimes = (start, end) => {
  let primes = [];
  let count = start;

  if (end < 2) {
    return [];
  }

  while (count <= end) {
    if (count > 1 && isPrime(count)) {
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