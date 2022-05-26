/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(x < 0) {
        x = x.toString().split('');
        let sign = x.shift();
        let reverseInt = x.reverse().join('');
        if(parseInt(reverseInt) > 2**31) return 0;
        return sign + reverseInt;
    } else {
        let reverseInt = x.toString().split('').reverse().join('');
        if(parseInt(reverseInt) > 2**31) return 0;
        return parseInt(reverseInt);
    }
  
    
};