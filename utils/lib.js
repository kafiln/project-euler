module.exports = class lib {

    // returns wether or not the given number is prime
    static isPrime(number) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if ((number % i) == 0) return false;
        }
        return number != 1;
    }

    // returns the closest prime number bigger that the given number
    static nextPrime(n) {
        let i = n + 1;
        while (!this.isPrime(i)) i++;
        return i;
    }

    // returns an array containing all the dividors of a given number
    static dividors(number) {
        let result = [1];
        for (let i = 2; i <= number; i++) {
            if ((number % i) == 0) result.push(i);
        }
        return result;
    }

    // returns an array containing all the prime factors of a given number
    static primeFactors(remainder) {
        var factors = [], i;

        for (i = 2; i <= remainder; i++) {
            while ((remainder % i) === 0) {
                factors.push(i);
                remainder /= i;
            }
        }

        return factors;
    }

};