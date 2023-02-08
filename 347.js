/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const mp = new Map();
    for (const num of nums) {
        if (mp.has(num)) {
            const count = mp.get(num) + 1
            mp.set(num, count);
        }
        else {
            mp.set(num, 0);
        }
    }
    return Array.from(mp.entries()).sort((a, b) => {
        return b[1] - a[1]
    }).map((v) => v[0]).slice(0, k);

};
topKFrequent([1, 1, 1, 2, 2, 3, 3, 3, 3, 3], 2)