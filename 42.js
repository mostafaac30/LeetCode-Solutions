/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    // max l and max r 
    // calc abs( min of max l and max r - height[i] )
    // shift maxL when maxL<= maxright
    // if maxL > maxR shift max r
    //

    let lo = 0, hi = height.length - 1;;
    let maxL = height[lo];
    let maxR = height[hi];
    let sum = 0;
    while (lo < hi) {

        if (height[lo] <= height[hi]) {
            lo++;
            maxL = Math.max(height[lo], maxL)
            sum += Math.abs(maxL - height[lo]);

        }
        else {
            hi--;
            maxR = Math.max(height[hi], maxR)
            sum += Math.abs(maxR - height[hi]);
        }


    }
    console.log(sum)
    return sum;
};

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
trap([4, 2, 0, 3, 2, 5])
trap([0, 2, 0])