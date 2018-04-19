# Problem 4
## Largest palindrome product

A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is `9009` = `91` × `99`.


## Question

Find the largest palindrome made from the product of two 3-digit numbers.
### Solution

```javascript
isPalindrome = word => word === word.split('').reverse().join('');


main = () => {
    let max = 1;
    for (let i = 999; i > 99; i--) {
        for (let j = 999; j > 99; j--) {
            const temp = i * j;
            if (isPalindrome('' + temp)) {
                max = Math.max(temp, max);
            }
        }
    }
    return max;

}

```

### Answer
`906609`