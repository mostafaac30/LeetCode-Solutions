/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    const mp = new Map();
    for (const e of strs) {
        const count = [...new Array(26)].map(() => 0);

        for (const c of e) {
            count[c.charCodeAt(0) - "a".charCodeAt(0)]++;

        }
        if (mp.has(JSON.stringify(count))) {
            mp.get(JSON.stringify(count)).push(e);
        }
        else {
            mp.set(JSON.stringify(count), [e]);
        }

    }
    return Array.from(mp.values());



};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"])