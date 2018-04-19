fibannaciNumbers = limit => {
    let result = [1, 2];

    let a = 1; b = 2; c = 0;

    while (a + b < limit) {
        c = a + b;
        b = c;
        a = c - a;
        result.push(c);

    }
    return result;
}

main = () => fibannaciNumbers(4000000).filter(i => i % 2 == 0).reduce((a, b) => a + b, 0);