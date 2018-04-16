# Problem 21 
## Names scores

Using [names.txt](https://projecteuler.net/project/resources/p022_names.txt) (right click and 'Save Link/Target As...'), a `46K` text file containing over five-thousand first names, begin by sorting it into alphabetical order. Then working out the alphabetical value for each name, multiply this value by its alphabetical position in the list to obtain a name score.

For example, when the list is sorted into alphabetical order, COLIN, which is worth `3 + 15 + 12 + 9 + 14 = 53`, is the `938th` name in the list. So, COLIN would obtain a score of `938 × 53 = 49714`.



## Question
What is the total of all the name scores in the file?


## Solution

```csharp
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ProjectEulerProblem22
{
    class P22
    {
        static void Main(string[] args)
        {	
        	//Replace this path by yours
            String path = "C:\\Users\\Kafil\\Documents\\names.txt";

            var names = new List<String>();
            var namesT = new List<String>();

            using (StreamReader reader = new StreamReader(path))
            {
                string line;
                while ((line = reader.ReadLine()) != null)
                {
                    names = line.Split(',').ToList();
                }
            }

            names.Sort();

            foreach (var item in names)
            {

                String tmp;
                tmp = item.Substring(1).Substring(0, item.Length - 2);
                namesT.Add(tmp);
            }

            namesT.Sort();

            Console.WriteLine(score(namesT));
        }

        public static int StringScore(String s)
        {
            int sum = 0;
            foreach (var c in s.ToArray())
            {
                sum += (int)(c - 64);
            }
            return sum;
        }

        public static int score(List<String> list)
        {
            var sum = 0;
            foreach (var item in list)
            {
                sum += (list.IndexOf(item) + 1) * StringScore(item);

            }
            return sum;
        }
    }
}
```

## Answer
`871198282`