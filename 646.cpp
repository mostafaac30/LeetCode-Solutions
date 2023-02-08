#include <bits/stdc++.h>

using namespace std;

class Solution
{
public:
    Solution()
    {
        ios_base::sync_with_stdio(0);
        cin.tie(0);
        cout.tie(0);
    }
    vector<int> findErrorNums(vector<int> &nums)
    {

        int n = nums.size();
        int total = n * (n + 1) / 2;
        int sum = 0;
        int numsSum = 0;
        set<int> st = set<int>();

        for (int num : nums)
        {
            numsSum += num;
            st.insert(num);
        }
        for (int num : st)
        {
            sum += num;
        }

        return {
            numsSum - sum,
            total - sum,
        };
    }
};

// int main(){
//     Solution().missingNumber()
// }