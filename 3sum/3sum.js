/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let output = [];
   let sortNums = nums.sort((a,b) => (a - b));
   for(let i = 0; i < sortNums.length; i++) {
    if( sortNums[i -1] === sortNums[i] ) continue;
       let j = i + 1;
       let k = nums.length -1;
       while(j < k) {
           let tripletSum = (sortNums[i] + sortNums[j] + sortNums[k]);
        if( tripletSum === 0) {
            output.push([sortNums[i], sortNums[j], sortNums[k]]);
            while(sortNums[j] === sortNums[j + 1]) j++;
            while(sortNums[k] === sortNums[k - 1]) k--;
            j++;
            k--;
        } else if (tripletSum < 0) {
            j++;
        } else {
            k--;
        }
       }
    }

   return output;
};