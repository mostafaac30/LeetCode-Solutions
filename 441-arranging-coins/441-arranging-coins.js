/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    return parseInt(Math.sqrt(2 * n + 0.25) - 0.5);

};

console.log(arrangeCoins(5))