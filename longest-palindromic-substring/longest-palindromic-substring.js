/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
 let palinderomeLongest = '';
    for(let i = 0; i < s.length; i++) {
        let oddPalinderome = getPalinderome(s,i,i);
        let evenPalinderome = getPalinderome(s, i-1, i);
        if(oddPalinderome.length > palinderomeLongest.length) {
            palinderomeLongest = oddPalinderome;
        }
        if(evenPalinderome.length > palinderomeLongest.length) {
            palinderomeLongest = evenPalinderome;
        }
        
    }
    return palinderomeLongest;
};

var getPalinderome = function(s, left, right) {
    let i = 0;
    while(s[left - i] && s[left - i] === s[right + i]) {
        i++;
    }
    i--;
    
    return s.slice(left - i, right + i + 1);
}