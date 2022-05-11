/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
    let min = 0, max = letters.length - 1, med;
    while (max >= min) {
        med = parseInt((min + max) / 2)
        if (letters[med] > target) {
            max = med - 1
        }
        else if (letters[med] <= target) {
            min = med + 1
        }
    }
    return letters[min % letters.length]
};

console.log(nextGreatestLetter(["c", "f", "j"], "a"))