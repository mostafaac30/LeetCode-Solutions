/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @param {string} word1
 * @param {string} word2
 * @return {string[]}
 */

var isSubset = function (word1, word2) {
    let ok = true;
    word2.split('').forEach((w) => {
        if (!word1.includes(w)) {
            ok = false;
            return;
        }
    })

    return ok;


};

function findFrequency(string) {

    let stringArray = new Array(26).fill(0);

    for (let i = 0; i < string.length; i++) {
        let index = string.charCodeAt(i) - "a".charCodeAt();
        stringArray[index]++;
    }

    return stringArray;
}

var wordSubsets = function (words1, words2) {
    let result = [];
    words1.forEach(word => {
        let ok = true;

        for (const w of words2) {
            isSubset(word, w) ? ok = true : ok = false;
            console.log(word, w, ok)
            if (!ok) break;
        }

        if (ok) {
            result.push(word);
        }
    })
    return result;
};


console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["e", "o"]));
console.log(wordSubsets(["amazon", "apple", "facebook", "google", "leetcode"], ["lo", "eo"]));