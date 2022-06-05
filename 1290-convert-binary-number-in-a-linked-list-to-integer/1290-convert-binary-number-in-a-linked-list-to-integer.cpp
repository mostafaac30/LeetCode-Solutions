/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */

class Solution {
public:
    int getDecimalValue(ListNode* head) {
        vector<int> lst;
        ListNode* curr=head;
        lst.push_back(curr->val);
        
        int len=1;
        while(curr->next != NULL) {
            curr=curr->next;
            lst.push_back(curr->val);
            len++;
        }
        int sum=0;
        int ex=1;
        
        while(len--){
            cout<<lst[len];
           if(lst[len]) sum+=ex;
            ex*=2; // 2 4
        }
        
        return sum;
        
    }
};