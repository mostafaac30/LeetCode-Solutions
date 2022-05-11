/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let i = 0, j = 1, len = nums.length;
    while (len--) {
        // if (nums[i] != nums[j]) {
        //     nums.splice(i + 1, j - i - 1)
        //     i++
        //     j = i + 1
        // }
        // else j++
        if (nums[i] != nums[j]) {
            nums[++i] = nums[j]
        }
        j++
    }
    return i 
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))