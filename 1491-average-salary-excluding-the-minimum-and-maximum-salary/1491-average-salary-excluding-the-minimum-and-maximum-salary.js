/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
    let except, len = salary.length, sum = 0;
    except = Math.min(...salary) + Math.max(...salary)

    while (len--) {
        sum += salary[len]
    }
    return (sum - except) / (salary.length - 2)


};

