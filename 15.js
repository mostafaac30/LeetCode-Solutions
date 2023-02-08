/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1;
    const total = []
    while (i < j) {
        const sum = numbers[i] + numbers[j];
        if (sum === target) {
            total.push([numbers[i], numbers[j]])
            //to prevent bad alloc
            i++;
            j--;

            //check duplicates and skip
            while (i < j && numbers[i] === numbers[i - 1]) {
                i++;
            }
            while (i < j && numbers[j] === numbers[j + 1]) {
                j--;
            }

        }
        else if (sum > target) j--;
        else i++;
    }
    return total;

};

var threeSum = function (nums) {
    const total = []

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue // no duplicates , done on that num perviously

        const target = nums[i] * -1;
        const part = nums.slice(i + 1);
        const allTwoNums = twoSum(part, target);

        // add target to each returned sub list ex [1,2] ->> [t, 1,2 ] 
        if (allTwoNums) {
            for (const e of allTwoNums) {
                e.unshift(target * -1)
                total.push(e);

            }
        }
    }
    return total;
};

