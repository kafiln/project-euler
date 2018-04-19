// TODO : extract this to a lib for reuse
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