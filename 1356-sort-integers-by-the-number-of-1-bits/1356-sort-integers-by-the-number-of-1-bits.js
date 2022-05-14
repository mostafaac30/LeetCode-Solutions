/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
    let ones = []
    let keys = []

    let len = arr.length;

    while (len--) {
        let num = arr[len];
        keys[len] = num
        ones[len] = 0;
        ones[len] = hammingWeight(num)

    }
    let sorted = keys.map((val, index) => [val, ones[index]]);
    sorted.sort((a, b) => b[1] == a[1] ? a[0] - b[0] : a[1] - b[1])
    return sorted.map((item) => item[0])
    console.log(keys, ones)
};
const hammingWeight = n => {
    let count = 0;
    while (n) {
        n = n & (n - 1)
        count++
    }
    return count
}

console.log(sortByBits([10000, 10000]))