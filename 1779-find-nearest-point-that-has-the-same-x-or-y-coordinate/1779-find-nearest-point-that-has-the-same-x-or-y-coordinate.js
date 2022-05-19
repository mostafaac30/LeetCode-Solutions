/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
var nearestValidPoint = function (x, y, points) {
    let len = points.length, index;
    let manhattan = Number.MAX_SAFE_INTEGER;
    while (len--) {
        if (points[len][0] === x || points[len][1] === y) {
            let cur = Math.abs(x - points[len][0]) + Math.abs(y - points[len][1]);
            manhattan = Math.min(cur, manhattan);
            if (cur <= manhattan) index = len;
        }

    }
    return index == undefined ? -1 : index;
};

console.log(
    nearestValidPoint(3, 4, [[2, 3]])
)