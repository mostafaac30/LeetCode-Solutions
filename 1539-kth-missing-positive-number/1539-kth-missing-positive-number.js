

/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    //binary search 
    let min = 0, max = arr.length - 1, med;
    while (max >= min) {
        med = parseInt((max + min) / 2);
        if (arr[med] - med - 1 < k) {
            min = med + 1
        }
        else {
            max = med - 1
        }
    }
    return k + min
    
    //O(N) method
    // arr.forEach(item => {
    //     if (item <= k) {
    //         k++
    //     }
    // })
    // return k
};

console.log(findKthPositive([1, 2, 3, 4], 2))