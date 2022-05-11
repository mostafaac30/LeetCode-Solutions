/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0
    while (a * a <= c) {

        // let isB = Math.sqrt(c - a * a)
        // console.log(a, isB)

        if (isPerfectSquare(c - a * a)) {
            return true
        } a++
    }
    return false
};
var isPerfectSquare = function (num) {
    let min = 0, max = num, mid;

    while (min <= max) {
        mid = parseInt((max + min) / 2);
        if (mid * mid == num) {
            return true
        }
        else if (mid * mid < num) min = mid + 1;
        else max = mid - 1;

    }
    return false
};

console.log(judgeSquareSum(5))