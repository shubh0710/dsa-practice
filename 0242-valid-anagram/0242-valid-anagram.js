/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const sMap = new Map()
    const tMap = new Map()
    const sLen = s.length
    const tLen = t.length

    if (sLen === tLen) {
    for (const sChar of s) {
        if (!sMap.has(sChar)) {
            sMap.set(sChar, 1)
        } else if (sMap.has(sChar)) {
            sMap.set(sChar, sMap.get(sChar) + 1)
        }
    }

    for (const tChar of t) {
        if (!tMap.has(tChar)) {
            tMap.set(tChar, 1)
        } else if (tMap.has(tChar)) {
            tMap.set(tChar, tMap.get(tChar) + 1)
        }
    }

    for (const key of sMap.keys()) {
        if (!tMap.has(key) || sMap.get(key) !== tMap.get(key)) {
            return false
        }
    }

    return true
    }

    return false
};