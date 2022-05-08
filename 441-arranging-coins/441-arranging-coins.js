/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
    // return (Math.sqrt(2 * n + 0.25) - 0.5);
    let min = 0, max = n, med, last = -1, coin;

    while (max >= min) {
        med = parseInt((max + min) / 2)
        coin = med * (med + 1) / 2
        if (coin == n) {
            return med
        }
        else if (coin < n) {
            min = med + 1
        }
        else if (coin > n) {
            max = med - 1
        }
    }

    return max

};

console.log(arrangeCoins(4))