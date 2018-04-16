# Problem 26 
## Reciprocal cycles
A unit fraction contains `1` in the numerator. The decimal representation of the unit fractions with denominators `2` to `10` are given:

* `1/2	= 	0.5`
* `1/3	= 	0.(3)`
* `1/4	= 	0.25`
* `1/5	= 	0.2`
* `1/6	= 	0.1(6)`
* `1/7	= 	0.(142857)`
* `1/8	= 	0.125`
* `1/9	= 	0.(1)`
* `1/10	= 	0.1`

Where `0.1(6)` means `0.166666...`, and has a `1-digit` recurring cycle. It can be seen that `1/7` has a `6-digit` recurring cycle.

## Question

Find the value of `d < 1000` for which `1/d` contains the longest recurring cycle in its decimal fraction part.

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

`result = 872187`