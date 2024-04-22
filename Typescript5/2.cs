using System;

public class Solution {
    public int ThirdMax(int[] nums) {
        long max1 = long.MinValue;
        long max2 = long.MinValue;
        long max3 = long.MinValue;

        foreach (int num in nums) {
            if (num > max1) {
                max3 = max2;
                max2 = max1;
                max1 = num;
            } else if (num < max1 && num > max2) {
                max3 = max2;
                max2 = num;
            } else if (num < max2 && num > max3) {
                max3 = num;
            }
        }

        return max3 != long.MinValue ? (int)max3 : (int)max1;
    }
}

class Program {
    static void Main(string[] args) {
        Solution solution = new Solution();
        int[] nums = { 3, 2, 1, 5, 6, 4 };
        Console.WriteLine(solution.ThirdMax(nums)); // Output: 3
    }
}
