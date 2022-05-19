/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let temp = n;
    let len = n.toString().length
    let sum = 0, p = 1;

    while (len--) {
        let digit = parseInt(temp % 10);
        // console.log(digit)

        sum += digit;
        p *= digit;
        temp /= 10;
    }
    return p - sum

};

console.log(subtractProductAndSum(705))