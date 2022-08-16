/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    let [len1, len2] = [num1.length, num2.length];
  const result = new Array(len1 + len2).fill(0);
  let value = 0;
  let carry = 0;
  let index = 0;
  
  for(let i = len1 -1; i >= 0; i--) {
      carry = 0;
      for(let j = len2 -1; j >= 0; j--) {
          index = result.length -2 -i -j;
          value = (num1[i] * num2[j]) + carry + result[index];
          result[index] = (value % 10);
          carry = Math.floor((value / 10)); 
      }
      if(carry) {
        result[index + 1] = carry;
      }
  }
  while(result.length > 1 && result[result.length -1] === 0) result.pop();
  return result.reverse().join('');
};

           