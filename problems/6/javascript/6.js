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