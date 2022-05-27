/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let len = digits.length;
    for(let i = len -1; i >= 0; i--) {
        if(digits[i] < 9) {
            digits[i] += 1;
            return digits;
        } else if ( digits[i - 1] && digits[i] > 8) {
        digits[i] = 0;
        continue;
        }
        digits[i] = 0;
    }
  return [1,...digits];
};