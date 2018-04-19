# Problem 5
## Smallest multiple

`2520` is the smallest number that can be divided by each of the numbers from `1` to `10` without any remainder.



## Question

What is the smallest positive number that is evenly divisible by all of the numbers from `1 to 20`?
### Solution

```javascript
gcd = (a, b) => !b ? a : gcd(b, a % b);

lcm = (a, b) => (a * b) / gcd(a, b);

smallestMultiple = (min, max) => {
    let result = 1;
    for (let i = min; i <= max; i++) {
        result = lcm(result, i);
    }
    return result;
}

console.log(smallestMultiple(1, 20));

```

### Answer
`232792560`