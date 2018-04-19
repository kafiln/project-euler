// TODO : Add to a math lib for reuse
primeFactors = remainder => {
    var factors = [], i;

    for (i = 2; i <= remainder; i++) {
        while ((remainder % i) === 0) {
            factors.push(i);
            remainder /= i;
        }
    }

    return factors;
}
largestPrimeFactor = number => primeFactors(number)
    .reduce((a, b) => Math.max(a, b), 0);


console.log(largestPrimeFactor(600851475143));