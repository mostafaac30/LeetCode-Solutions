/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function (low, high) {
    return low % 2 ? Math.ceil((high - (low - 1)) / 2) : (high - low) / 2

};