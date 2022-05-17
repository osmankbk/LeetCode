/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
     if(!s || s.length === 0) {
        return 0;
    }

    if(s.length === 1) {
        return 1;
    }
    let hash = [];
    let longest = 0;
    for(let i = 0; i < s.length; i++) {
        let currentString = hash.indexOf(s[i]);

        if(currentString !== -1){
            hash.splice(0, currentString + 1);
        }
        hash.push(s[i]);
        longest = Math.max(longest, hash.length);
    }

    return longest;
};