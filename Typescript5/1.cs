using System;

public class Program
{
    public static void Main(string[] args)
    {
        string a = "1011";
        string b = "110";
        Console.WriteLine("Binary sum of " + a + " and " + b + ": " + AddBinary(a, b));
    }

    public static string AddBinary(string a, string b)
    {
        string result = "";
        int i = a.Length - 1, j = b.Length - 1, carry = 0;

        while (i >= 0 || j >= 0 || carry > 0)
        {
            int digitA = i >= 0 ? a[i] - '0' : 0;
            int digitB = j >= 0 ? b[j] - '0' : 0;
            int sum = digitA + digitB + carry;
            result = (sum % 2) + result;
            carry = sum / 2;
            i--;
            j--;
        }

        return result;
    }
}
