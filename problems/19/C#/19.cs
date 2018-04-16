using System;
namespace ProjetEulerProblem19
{
    class P19
    {
        const DateTime startCentury = new DateTime(1901, 1, 1);
        const DateTime endCentury = new DateTime(2000, 12, 31);
        static void Main(string[] args)
        {
            int counter = 0;
            DateTime currentDay;
            for (currentDay = startCentury; currentDay <= endCentury; currentDay = currentDay.AddDays(1))
            {
                if (isFirstinMonth(currentDay))
                    counter++;
            }
            Console.WriteLine(counter);
        }

        //returns true if the given date is a Sunday and the first day of the month,
        // false elsewhere
        public static bool isFirstinMonth(DateTime d)
        {
            return (d.Day == 1 && d.DayOfWeek == DayOfWeek.Sunday);
           
        }
    }
}