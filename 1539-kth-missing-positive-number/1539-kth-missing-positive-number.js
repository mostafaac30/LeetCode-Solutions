

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    arr.forEach(item => {
        if (item <= k) {
            k++
        }
    })
    return k
};
