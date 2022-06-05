/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */     
var lst=[] ;

var inorderTraversal = function(root) {  
lst=[];
    return cal(root);
};

var cal = function(root) {  
    if(root != null){
        cal(root.left);
       lst.push(root.val); 
        cal(root.right);
    }
    return lst;

};
