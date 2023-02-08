/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let lo = 0;
    let hi = 1;
    let res = 0;

    while (hi < prices.length) {
        res = Math.max(prices[hi] - prices[lo], res);
        console.log(prices[lo], prices[hi], res)
        if (prices[hi] < prices[lo]) {
            lo++;
            hi++;
        }
        else {
            hi++;
        }

    }
    console.log(res)
    return res;
};

// maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([7, 6, 4, 3, 1])
// maxProfit([1, 2, 4])
// maxProfit([2, 1, 4, 5, 2, 9, 7])
// maxProfit([2, 1, 2, 1, 0, 1, 2])
maxProfit([1, 2, 4, 2, 5, 7, 2, 4, 9, 0, 9])