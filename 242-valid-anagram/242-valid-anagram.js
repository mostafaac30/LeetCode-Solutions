/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let mpS = {}
    let mpT = {}
    if (s.length != t.length) return false

    let len = s.length
    while (len--) {
        s[len] in mpS ? mpS[s[len]]++ : mpS[s[len]] = 1
        t[len] in mpT ? mpT[t[len]]++ : mpT[t[len]] = 1
    }
    len = s.length
    for (let e in mpS) {
        if (mpS[e] != mpT[e]) return false
    }
    return true
};

console.log(isAnagram("anagram",
    "nagaram"))