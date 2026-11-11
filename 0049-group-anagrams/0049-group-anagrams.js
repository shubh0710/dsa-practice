/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const myMap = new Map()

    for (let i = 0; i < strs.length; i++) {
        const key = strs[i].split('').sort().join('')
        if (!myMap.has(key)) {
            myMap.set(key, [strs[i]])
        } else if (myMap.has(key)) {
            myMap.get(key).push(strs[i])
        }
    }

    const result = [...myMap.values()]

    return result
};