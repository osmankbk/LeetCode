/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let rmv = /[\W_]/g;
    let newS = s.toLowerCase().replace(rmv, '');
    for(let i = 0; i < newS.length / 2; i++) {
        if(newS[i] !== newS[newS.length -1 -i]) return false;
    }
    
    return true;
};