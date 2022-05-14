/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function (s) {
    for (let i = 0; i < s.length; i++) {
        if (s.charCodeAt(i) < 91 && s.charCodeAt(i) > 64) {
            s = s.substring(0, i) + String.fromCharCode(s.charCodeAt(i) + 32) + s.substring(i + 1, s.length)
        }
    }
    return s
};

console.log(toLowerCase("Hello"))