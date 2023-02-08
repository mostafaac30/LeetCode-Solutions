/**
 * @param {string} s
 * @return {number}
 */
const lowerLimit = -(2 ** 31);
const upperLimit = (2 ** 31) - 1;


var myAtoi = function (s) {

    let sign;
    let end;
    s = s.trim().split('').filter((v, idx) => {
        const ascii = v.charCodeAt(0);
        if (!end && !sign && idx === 0 && (v === '-' || v === '+')) {
            sign = v === '-' ? -1 : +1;
            return false;
        }
        else if (!end && ascii <= 57 && ascii >= 48) {
            return true
        }
        end = true;
        return false;
    })

    let leadingZeros = true;
    s = s.map((v, idx) => {
        const ascii = v.charCodeAt(0);
        const num = ascii - 48
        if (leadingZeros && num === 0)
            return
        else
            leadingZeros = false
        return num;

    }).join('');
    if (!s.length) return 0;

    s = !sign ? s : s * sign
    if (s < lowerLimit) return lowerLimit;
    else if (s > upperLimit) return upperLimit;
    return s;
};

// myAtoi("   -42")
// myAtoi("words and 987")
// myAtoi("+4193 with words")
// myAtoi("-91283472332")
// myAtoi(".1")
// myAtoi("00000-42a1234")