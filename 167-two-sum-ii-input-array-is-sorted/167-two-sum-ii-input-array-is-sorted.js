/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let i = 0, j = numbers.length - 1, len = numbers.length;
    while (len--) {
        let res = numbers[i] + numbers[j];
        if (res == target) return [i + 1, j + 1]
        else if (res < target) i++;
        else j--
    }

    /// Binary search
    // let min, max, mid, comp = 0;
    // for (let i = 0; i < numbers.length; i++) {
    //     comp = target - numbers[i];
    //     min = i + 1; max = numbers.length - 1;
    //     while (max >= min) {
    //         mid = parseInt((max + min) / 2);
    //         if (numbers[mid] == comp) {
    //             return [i + 1, mid + 1]
    //         }
    //         else if (numbers[mid] < comp) {
    //             min = mid + 1;
    //         }
    //         else {
    //             max = mid - 1;
    //         }
    //     }
    // }
};

console.log(twoSum([0, 0, 3, 4], 0))