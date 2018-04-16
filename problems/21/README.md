# Problem 21 
## Amicable numbers

Let `d(n)` be defined as the sum of proper divisors of `n` (numbers less than n which divide evenly into n).
If `d(a) = b` and `d(b) = a`, where ``a ≠ b``, then `a and b are an amicable` pair and each of a and b are called `amicable` numbers.

For example, the proper divisors of `220` are ``1, 2, 4, 5, 10, 11, 20, 22, 44, 55`` and `110`; therefore `d(220) = 284`. The proper divisors of `284` are 1`, 2, 4, 71 and 142`; so `d(284) = 220`.


## Question
Evaluate the sum of all the amicable numbers under `10000`.


## Solution

```csharp
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
```

## Answer
`31626`