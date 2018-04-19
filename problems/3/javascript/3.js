// TODO : Add to a math lib to use everywhene
isPrime = number => {
    for (let i = 1; i < Math.sqrt(number); i++) {
        if ((number % i) == 0) return false;
    }
    return true;
}

// TODO : Add to a math lib to use everywhene
dividors = number => {
    let result = [1];
    for (let i = 2; i <= number; i++) {
        if ((number % i) == 0) result.push(i);
    }
    return result;
}

// TODO : Add to a math lib to use everywhene
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

main = () => primeFactors(600851475143).reduce((a, b) => Math.max(a, b), 0);


console.log(main());