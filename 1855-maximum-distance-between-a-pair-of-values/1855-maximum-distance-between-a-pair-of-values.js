/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var maxDistance = function (nums1, nums2) {

    let i = 0, j = 0;
    let maxDistance = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] <= nums2[j]) {
            maxDistance = Math.max(maxDistance, j - i)
            j++
        }
        else
            i++;

    }
    return maxDistance

};


console.log(maxDistance([55, 30, 5, 4, 2], [100, 20, 10, 10, 5]))