const lib = require('../../../utils/lib.js');

summationOfPrimes = number => {
    let result = 0;
    let i = 2;
    while (i < number) {
        if (lib.isPrime(i)) result += i;
        i++;
    }
    return result;

}

// console.log(summationOfPrimes(10))
console.log(summationOfPrimes(2000000))