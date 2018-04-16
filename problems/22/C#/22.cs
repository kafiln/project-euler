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