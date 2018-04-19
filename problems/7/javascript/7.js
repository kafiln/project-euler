const lib = require('../../../utils/lib.js');

nthPrime = n => {
    let number = 0;
    let i = 0;
    while (number <= n) {
        if (lib.isPrime(i)) {
            number++;
        }
        i++;
    }
    i--;
    return i;
}

console.log(nthPrime(10001));
