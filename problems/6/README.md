# Problem 6
## Sum square difference


The sum of the squares of the first ten natural numbers is :

`1^2 + 2^2 + ... + 10^2 = 385`

The square of the sum of the first ten natural numbers is :

`(1 + 2 + ... + 10)^2 = 552 = 3025`

Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is :

 `3025 − 385 = 2640`.

## Question

Find the difference between the sum of the squares of the first one hundred natural 
numbers and the square of the sum.
### Solution

```javascript
sumSquareDifference = (limit) => {
    let sum = 0;
    let sumPower = 0;

    for (let i = 1; i <= limit; i++) {
        sumPower += i * i;
        sum += i;
    }

    return sum * sum - sumPower;
}

console.log(sumSquareDifference(100));
```
> This is, obviously, the naive solution, there must be a more elegant one.

### Answer
`sumSquareDifference(100) = 25164150`