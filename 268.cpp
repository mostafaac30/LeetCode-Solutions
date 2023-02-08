#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    int missingNumber(vector<int> &nums)
    {

        // sort(nums.begin(), nums.end());
        // for (int i = 0; i < nums.size(); i++)
        // {
        //     if (nums[i] != i)
        //     {
        //         return i;
        //     }
        // }
        // return nums.size();

        int n = nums.size();
        int total = n * (n + 1) / 2;
        for (int num : nums)
        {
            total -= num;
        }
        return total;
    }
};

// int main(){
//     Solution().missingNumber()
// }