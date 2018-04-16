# Problem 19 
## Counting Sundays

You are given the following information, but you may prefer to do some research for yourself.

1 Jan 1900 was a Monday.
Thirty days has September,
April, June and November.
All the rest have thirty-one,
Saving February alone,
Which has twenty-eight, rain or shine.
And on leap years, twenty-nine.
A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.

## Question
How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?

## Solutions

```csharp
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
```

## Answer
`result = 171`