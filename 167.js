/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1;

    while (j > i) {
        const sum = numbers[i] + numbers[j];
        console.log(sum)
        if (sum === target) return [i + 1, j + 1]
        else if (sum > target) j--;
        else i++;
    }

};

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([5, 25, 75], 100))
console.log(twoSum([3, 24, 50, 79, 88, 150, 345], 200))
