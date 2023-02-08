/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    s = s.split('').filter((v) => {
        const ascii = v.charCodeAt(0);

        if (ascii <= 57 && ascii >= 48 || ascii >= 65 && ascii <= 90 || ascii >= 97 && ascii <= 122) {
            return true
        }
        return false;
    });
    console.log(s)

    s = s.map((v) => {
        const ascii = v.charCodeAt(0);

        if (ascii >= 65 && ascii <= 90)
            return String.fromCharCode(32 + ascii);
        return v;
    });

    console.log(s.join(''))
    for (let i = 0; i < s.length / 2; i++) {
        if (s[i] !== s[s.length - 1 - i]) {
            return false;
        }
    }

    console.log(true)
    return true;

};


isPalindrome("ab_a");