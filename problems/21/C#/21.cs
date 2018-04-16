namespace ProjectEulerProblem21
{
    class P21
    {
        static void Main(string[] args)
        {
            int count = 0;
            for (int i = 1; i < 10000; i++)
            {
                var temp = sumDivider(i);
                if (isAmicable(i, temp))
                {
                    count += temp;
                }
            }
            System.Console.WriteLine(count);
        }
        public static int sumDivider(int n)
        {
            var sum = 0;
            for (int i = 1; i < n; i++)
            {
                if (n % i == 0) sum += i;
            }
            return sum;
        }
        public static bool isAmicable(int a, int b)
        {
            if (a == b) return false;
            return (sumDivider(a) == b && sumDivider(b) == a);
        }
    }
}