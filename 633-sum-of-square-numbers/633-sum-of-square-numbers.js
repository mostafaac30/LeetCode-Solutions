/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0
    while (a * a <= c) {
        let isB = Math.sqrt(c - a * a)
        if (isB == Math.round(isB))
            return true
        a++
    }
    return false
};

console.log(judgeSquareSum(2147482647))