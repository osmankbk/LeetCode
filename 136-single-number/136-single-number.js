/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let countNums = {};
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        countNums[num] ? countNums[num]++ : countNums[num] = 1;
    }
    for(const num of Object.keys(countNums)) {
      if(countNums[num] === 1) return num;
    }
};