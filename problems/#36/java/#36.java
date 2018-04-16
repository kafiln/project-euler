public class P36 {

    public static void main(String[] args) {

        int count = 0;
        for (int i = 0; i < 1_000_000; i++) {
            if (isDoublePalindrome("" + i)) {
                count += i;
            }
        }
        // answer = 872187
        System.out.println(count);
    }

    public static boolean isPalindrome(String number) {
        return new StringBuilder(number).reverse().toString().equals("" + number);
    }

    public static String toBinary(String number) {

        return Long.toBinaryString(Long.parseLong(number));
    }

    public static boolean isDoublePalindrome(String number) {

        return isPalindrome(number) && isPalindrome(toBinary(number));
    }

}