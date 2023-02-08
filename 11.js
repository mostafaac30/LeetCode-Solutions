/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let i = 0, j = height.length - 1;
    let area = -1;
    while (i < j) {
        const h = Math.min(height[i], height[j])
        const w = Math.abs(i - j);
        area = Math.max(area, h * w)
        // console.log(area, h, w)
        // console.log(i, j, height[i], height[j])
        i++;
        j--;
        // const leftDif = Math.abs(height[i] - height[i - 1])
        // const rightDif = Math.abs(height[j] - height[j + 1])
        // if (height[i] <= height[i - 1] && height[j] <= height[j + 1]) {
        //     console.log(area)
        //     return area
        // }
        if (height[j + 1] > height[i - 1]) j++;
        else i--;
    }
    console.log(area)
    return area
};

maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])
maxArea([1, 1])
maxArea([1, 2, 1])
maxArea([1, 8, 6, 2, 5, 4, 8, 3, 9, 8])
maxArea([6, 4, 3, 1, 4, 6, 99, 62, 1, 2, 6]) //62