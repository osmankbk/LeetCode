/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let anagram = {};
    if(t.length !== s.length) return false;
    for(let i = 0; i < s.length; i++) {
      let char = s[i];
      anagram[char] ? anagram[char]++ : anagram[char] = 1;
    }

    for(let j = 0; j < t.length; j++) {
      let char = t[j];
      if(!anagram[char]) {
        return false;
      } else {
        anagram[char]--;
      }
    }
      return true;
};