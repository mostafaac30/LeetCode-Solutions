/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */


var kWeakestRows = function (mat, k) {
    let mp = [];
    for (let i = 0; i < mat.length; i++) {
        let min = 0, max = mat[i].length - 1, med, ones = -1;
        let arr = mat[i];
        while (max >= min) {
            med = parseInt((max + min) / 2);
            if (arr[med] == 1) {
                min = med + 1
                ones = med;
            }
            else if (arr[med] == 0) {
                max = med - 1
            }
        }
        mp.push([i, ones])
    }

    return mp.sort((a, b) => a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]).slice(0, k).map(item => item[0])

};
