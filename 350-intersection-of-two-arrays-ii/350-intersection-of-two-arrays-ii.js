/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let minArr = nums1 <= nums2 ? nums1 : nums2;
    let bigArr = nums1 >= nums2 ? nums1 : nums2;
    let len = minArr.length

    bigArr.sort((a, b) => a - b);
    minArr.sort((a, b) => a - b);
    // console.log(minArr, bigArr)

    let res = []
    let min = 0
    for (let i = 0; i < len; i++) {
        let max = bigArr.length - 1, med;
        while (max >= min) {
            med = parseInt((min + max) / 2)
            let target = minArr[i]
            if (bigArr[med] == target) {
                // console.log(target)
                res.push(target);
                bigArr = bigArr.slice(0, med).concat(bigArr.slice(med + 1, bigArr.length))
                // console.log(...bigArr)
                break;
            }
            else if (bigArr[med] < target) min = med + 1
            else max = med - 1
        }
    }
    return res


};

console.log(intersect([1, 2, 2, 1], [2, 2]))

console.log(intersect([1, 2, 2, 1], [1, 1]))//[1,1]
console.log(intersect([1, 2], [1, 1]))  //1