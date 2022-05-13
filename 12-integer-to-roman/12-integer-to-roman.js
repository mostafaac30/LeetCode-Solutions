/**
 * @param {number} num
 * @return {string}
 */

const mp = new Map([
    [1000, 'M'],
    [900, 'CM'],
    [500, 'D'],
    [400, 'CD'],
    [100, 'C'],
    [90, 'XC'],
    [50, 'L'],
    [40, 'XL'],
    [10, 'X'],
    [9, 'IX'],
    [5, 'V'],
    [4, 'IV'],
    [1, 'I'],

])


var intToRoman = function (num) {
    let s = ''
    let i = 0

    while (num) {
       
        for (let e of mp) {
            if (num >= e[0]) {
                s = s.concat(e[1])
                num -= e[0]
                break
            }
        }
    }
    return s
};

console.log(intToRoman(1994)) // "MCMXCIV" M = 1000, CM = 900, XC = 90 and IV = 4.