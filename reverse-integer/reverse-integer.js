/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let reverseInt = parseInt(x.toString().split('').reverse().join(''));
    if( reverseInt > 2**31) return 0;
    return Math.sign(x) * reverseInt;
};