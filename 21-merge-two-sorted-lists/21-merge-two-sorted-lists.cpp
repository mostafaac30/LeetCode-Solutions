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
    ListNode* mergeTwoLists(ListNode* l1, ListNode* l2) {
        ListNode* newList=new ListNode;
        	if(l1 == NULL)
        {
			return l2;
		}
		
		if(l2 == NULL)
        {
			return l1;
		} 
		
        if(l1 -> val <= l2 -> val)
        {
			l1 -> next = mergeTwoLists(l1 -> next, l2);
			return l1;
		}
        else 
        {
			l2 -> next = mergeTwoLists(l1, l2->next);
			return l2;
		}

//         if(list1->val <= list2->val){
//                 newList=list1;
//                 list1=list1->next;
//             }
//          else {
//                 newList=list2;
//                 list2=list2->next;

//             }
//         ListNode* head=newList;

//         while(list1 && list2){
//             if(list1->val <= list2->val){
//                 newList->next=list1;
//                 list1=list1->next;

//             }
//             else {
//                 newList->next=list2;
//                 list2=list2->next;
//             }
//         }
//         while(list1){
//         newList->next=list1;
//         list1=list1->next;

//     }
//     while(list2){
//         newList->next=list2;
//         list2=list2->next;

//     }
    // return head;
    }
   
};