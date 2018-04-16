sumOfDividors = limit => {
    let result = 0;
    for (let i = 0; i < limit; i++) {
        if ((i % 3) === 0 || (i % 5) === 0) result += i;
    }
    return result;
}

const result = sumOfDividors(1000);
console.log(`The result of the problem #1 is ${result}`);