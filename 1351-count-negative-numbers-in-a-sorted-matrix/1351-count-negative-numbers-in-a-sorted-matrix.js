/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    let sum = 0
    for (let i = 0; i < grid.length; i++) {
        let min = 0, max = grid[i].length - 1, med, start = -1;
        let arr = grid[i];
        while (max >= min) {
            med = parseInt((max + min) / 2);
            if (arr[med] < 0) {
                max = med - 1
                start = med;
            }
            else if (arr[med] >= 0) {
                min = med + 1
            }
        }
        if (start >= 0) sum += (arr.length - start)
    }
    return sum

};

console.log(countNegatives([[7, -3]]))
// console.log(countNegatives([[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]))