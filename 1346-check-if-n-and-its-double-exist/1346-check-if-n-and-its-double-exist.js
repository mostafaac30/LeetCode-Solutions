/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    arr.sort((a, b) => a - b);
    for (let i = 0; i < arr.length; i++) {
        let min = 0, max = arr.length - 1, med;
        while (max >= min) {
            med = parseInt((min + max) / 2)
            let target = arr[i] * 2;
            if (arr[med] == target && med != i) {
                console.log(target, arr[i])
                return true
            }
            else if (arr[med] < target) min = med + 1
            else max = med - 1
        }
    }
    return false
};

console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]))