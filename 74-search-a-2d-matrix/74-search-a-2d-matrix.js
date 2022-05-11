/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    let index = 0;
    for (let i = 0; i < matrix.length; i++) {
        let arr = matrix[i]
        if (arr[arr.length - 1] >= target) {
            index = i
            console.log(index)
            break;
        }

    }

    // let min = 0, max = matrix[index].length - 1, med;
    // console.log(matrix[index])

    return get(matrix[index], target)

};
var get = function (arr, num) {
    let min = 0, max = arr.length - 1
    while (min <= max) {
        let med = parseInt((max + min) / 2);
        if (arr[med] == num) {
            return true
        }
        else if (arr[med] < num) min = med + 1;
        else max = med - 1;

    }
    return false
};

console.log(searchMatrix([
    [1, 3, 5, 7],
    [10, 11, 16, 20],
    [23, 30, 34, 60]]
    , 3))