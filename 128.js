/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {

    const st = new Set(nums)
    var longest = 0;
    for (const e of st) {
        if (!st.has(e - 1)) {
            let len = 0;
            while (st.has(e + len)) { len++; }
            longest = longest > len ? longest : len;
        }
    }
    return longest;
};

// longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])