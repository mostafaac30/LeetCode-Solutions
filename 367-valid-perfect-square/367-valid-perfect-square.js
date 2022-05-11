/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let min = 1, max = num, mid;

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


console.log(isPerfectSquare(14))