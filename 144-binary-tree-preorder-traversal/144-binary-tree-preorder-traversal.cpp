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
        vector<int> lst;
    vector<int> preorderTraversal(TreeNode* root) {
        lst={};
       return cal(root);
 }
        vector<int> cal(TreeNode* root) {
        if(root != NULL){
        lst.push_back(root->val);
        cal(root->left);
        cal(root->right); 
        }
            return lst;
 }

};