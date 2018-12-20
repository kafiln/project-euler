# Problem 10

## Summation of primes

The sum of the primes below `10` is `2 + 3 + 5 + 7 = 17`.


## Question

Find the sum of all the primes below `two million`.

### Solution

```javascript
const isPrime = require('../../../utils/lib.js').isPrime;

summationOfPrimes = number => {
    let result = 0;
    let i = 2;
    while (i < number) {
        if (isPrime(i)) result += i;
        i++;
    }
    return result;

}

// console.log(summationOfPrimes(10))
console.log(summationOfPrimes(2000000))

```

### Answer
`summationOfPrimes(2000000)=142913828922`