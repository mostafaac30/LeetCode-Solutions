/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let mp = new Map()
    if (s.length != t.length) return false

    s = s.split('').sort().toString()
    t = t.split('').sort().toString()
    let len = s.length
    while (len--) {
        if (s.charAt(len) != t.charAt(len)) return false
    }
    return t
};

console.log(isAnagram("rat",
    "car"))