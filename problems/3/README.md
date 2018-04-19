# Problem 3
## Largest prime factor

The prime factors of `13195` are `5, 7, 13 and 29`.


## Question
What is the largest prime factor of the number `600851475143` ?

### Solution

```javascript
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
```

### Answer
`largestPrimeFactor(600851475143) = 6857`