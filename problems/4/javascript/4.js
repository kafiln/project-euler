// TODO : Add to a lib to use everywhere
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

console.log(main())