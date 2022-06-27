/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
  let positions = '';
  let j = 0;
  for(let i = 0; i < t.length; i++) {
    if(t[i] === s[j]) {
      positions += t[i];
      j++;
    }
  }
  return (positions === s) ? true : false;
};