/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    let a = 0
    while (a * a <= c) {

        let b = c - a * a;
        //one apprache
        // let isB = Math.sqrt(c - a * a)
        // if (isB == Math.round(isB))
        //     return true
        
        //second way
        let min=0,max=b
        while (min <= max) {
        let mid = parseInt((max + min) / 2);
        if (mid * mid == b) {
            return true
        }
        else if (mid * mid < b) min = mid + 1;
        else max = mid - 1;

        }
    a++
    }
    return false
};

console.log(judgeSquareSum(5))