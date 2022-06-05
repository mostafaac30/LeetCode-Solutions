/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     TreeNode *left;
 *     TreeNode *right;
 *     TreeNode() : val(0), left(nullptr), right(nullptr) {}
 *     TreeNode(int x) : val(x), left(nullptr), right(nullptr) {}
 *     TreeNode(int x, TreeNode *left, TreeNode *right) : val(x), left(left), right(right) {}
 * };
 */
class Solution {
public:
    TreeNode* searchBST(TreeNode* root, int val) {
        return call(root,val);
    }
    
     TreeNode* call(TreeNode* root, int val) {
        if(root == NULL) return NULL;
         else if(root->val == val){
             return root;
    
         }
         else if(root->val < val)
            return call(root->right,val);
        else 
            return call(root->left,val);
             
    }
};