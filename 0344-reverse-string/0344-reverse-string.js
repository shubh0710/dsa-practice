/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let a;
    let b;
    
    for (let i = 0; i < Math.floor((s.length) / 2); i++) {
        a = s[i];
        b = s[s.length - (i + 1)]
        s[i] = b;
        s[s.length - (i + 1)] = a;
    }
};