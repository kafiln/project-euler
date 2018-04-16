# Problem 36

## Double-base palindromes

The decimal number, `585 = 10010010012` (binary), is palindromic in both bases.

Find the sum of all numbers, less than `one million`, which are palindromic in base 10 and base `2`.

**(Please note that the palindromic number, in either base, may not include leading zeros.)**


### Solution
```java
public class P36 {

    public static void main(String[] args) {

        int count = 0;
        for (int i = 0; i < 1_000_000; i++) {
            if (isDoublePalindrome("" + i)) {
                count += i;
            }
        }
        System.out.println(count);
    }

    public static boolean isPalindrome(String N) {
        return new StringBuilder(N).reverse().toString().equals("" + N);
    }

    public static String toBinary(String N) {

        return Long.toBinaryString(Long.parseLong(N));
    }

    public static boolean isDoublePalindrome(String N) {

        return isPalindrome(N) && isPalindrome(toBinary(N));
    }

}
```

### Answer
`872187`