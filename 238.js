/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {

    var product = 1;
    var zeros = 0;

    for (const n of nums) {
        if (n !== 0) {
            product *= n;
        } else {
            zeros++;
        }
        if (zeros > 1) {
            return [...new Array(nums.length)].map(() => 0)
        }
    }
    const ans = new Array();

    for (const n of nums) {
        if (n !== 0) {
            ans.push(product * !zeros / n);
        } else {
            ans.push(product);
        }
    }

    return ans.map((v, idx) => {
        if (v === - 0) {
            return 0;
        }
        return v;
    });
};

// productExceptSelf([1, 2, 3, 4])
productExceptSelf([-1, 1, 0, -3, 3])