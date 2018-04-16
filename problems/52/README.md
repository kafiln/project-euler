# Problem 52 
## Permuted multiples

It can be seen that the number, `125874`, and its double, `251748`, contain exactly the same digits, but in a different order.


## Question
Find the smallest positive integer, `x`, such that `2x`, `3x`, `4x`, `5x`, and `6x`, contain the same digits


## Solution

```csharp
using System;
using System.Collections.Generic;
using System.Linq;

namespace ProjectEulerProblem52
{
    class P52
    {
        static void Main(string[] args)
        {

            for (int i = 1; i < 100000000; i++)
            {
                if (toDigits(i).SequenceEqual(toDigits(2 * i)) &&
                    toDigits(3 * i).SequenceEqual(toDigits(2 * i)) &&
                    toDigits(3 * i).SequenceEqual(toDigits(4 * i)) &&
                    toDigits(4 * i).SequenceEqual(toDigits(5 * i)) &&
                    toDigits(6 * i).SequenceEqual(toDigits(5 * i))
                    )
                {
                    Console.WriteLine(i);
                    break;

                }
            }

        }

        public static List<int> toDigits(int n)
        {
            var digits = new List<int>();
            while (n > 0)
            {
                digits.Add(n % 10);
                n = n / 10;
            }
            digits.Sort();
            return digits;
        }


    }
}
```

## Answer
`142857`