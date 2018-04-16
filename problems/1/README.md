# Problem 1 
## Multiples of 3 and 5
If we list all the natural numbers below ``10`` that are multiples of ``3`` or ``5``, we get ``3``, ``5``, ``6`` and ``9``. The sum of these multiples is ``23``.

## Question
Find the sum of all the multiples of ``3`` or ``5`` below ``1000``.

### Solution

```javascript
sumOfDividors = limit => {
    let result = 0;
    for (let i = 0; i < limit; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) result += i;
    }
    return result;
}
```

### Answer
`233168`