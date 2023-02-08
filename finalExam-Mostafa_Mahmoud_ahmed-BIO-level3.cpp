
#include <bits/stdc++.h>

using namespace std;
vector<double> SortProducts(vector<double> nums)
{
    // using bubble sort - Mostafa Mahmoud Ahmed - bio - level 3
    int n = nums.size();
    for (int i = 0; i < n; i++)
    {
        for (int j = 1; j < n - i; j++)
        {
            if (nums[j] < nums[j - 1])
            {
                double temp = nums[j];
                nums[j] = nums[j - 1];
                nums[j - 1] = temp;
            }
        }
    }
    return nums;
}
int main()
{
    vector<double> v = {12000, 1243.56, 1289.32};

    int n = v.size();
    auto i = SortProducts(v);
    for (auto item : i)
    {
        cout << item << ' ';
    }
    cout << endl;
}
