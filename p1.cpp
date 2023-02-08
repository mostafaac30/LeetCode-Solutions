// #include <iostream>
// using namespace std;

// int main()
// {
//     int t;
//     cin >> t;

//     while (t--)
//     {
//         int a1, a2, a3, a4;
//         cin >> a1 >> a2 >> a3 >> a4;

//         int total_jokes = a1 + a2 + a3 + a4;
//         int mood_alice = 0;
//         int mood_bob = 0;
//         int jokes_told = 0;

//         while (total_jokes > 0)
//         {
//             if (mood_alice >= 0 && mood_bob >= 0)
//             {
//                 // both are in good mood
//                 if (a1 > 0)
//                 {
//                     // tell type 1 joke
//                     mood_alice++;
//                     mood_bob++;
//                     a1--;
//                 }
//                 else if (a2 > 0)
//                 {
//                     // tell type 2 joke
//                     mood_alice++;
//                     a2--;
//                 }
//                 else if (a3 > 0)
//                 {
//                     // tell type 3 joke
//                     mood_bob++;
//                     a3--;
//                 }
//                 else if (a4 > 0)
//                 {
//                     // tell type 4 joke
//                     mood_alice--;
//                     mood_bob--;
//                     a4--;
//                 }
//                 jokes_told++;
//                 total_jokes--;
//             }
//             else
//             {
//                 // one of them is in bad mood
//                 break;
//             }
//         }

//         cout << jokes_told << endl;
//     }

//     return 0;
// }

#include <iostream>
using namespace std;

int main()
{
    int t;
    cin >> t;

    while (t--)
    {
        int n;
        cin >> n;

        int p[n];
        for (int i = 0; i < n; i++)
        {
            cin >> p[i];
        }

        int operations = 0;
        int current = 1;
        for (int i = 0; i < n; i++)
        {
            if (p[i] != current)
            {
                operations++;
                int j = i + 1;
                while (j < n && p[j] != current)
                {
                    j++;
                }
                int min_val = min(p[i], p[j]);
                int max_val = max(p[i], p[j]);
                p[i] = min_val;
                p[j] = max_val;
                i = j - 1;
                current++;
            }
            else
            {
                current++;
            }
        }

        cout << operations << endl;
    }

    return 0;
}
