module.exports = class lib {

    static isPrime(number) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if ((number % i) == 0) return false;
        }
        return number != 1;
    }

    static nextPrime(n) {
        let i = n + 1;
        while (!this.isPrime(i)) i++;
        return i;
    }

    static dividors(number) {
        let result = [1];
        for (let i = 2; i <= number; i++) {
            if ((number % i) == 0) result.push(i);
        }
        return result;
    }

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