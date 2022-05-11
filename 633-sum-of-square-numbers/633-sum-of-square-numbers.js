/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0
    while (a * a <= c) {

        let b = c - a * a;
        if (isPerfectSquare(0, b, b)) {
            return true
        } a++
    }
    return false
};
var isPerfectSquare = function (min, max, num) {

    while (min <= max) {
        let mid = parseInt((max + min) / 2);
        if (mid * mid == num) {
            return true
        }
        else if (mid * mid < num) min = mid + 1;
        else max = mid - 1;

    }
    return false
};

console.log(judgeSquareSum(5))