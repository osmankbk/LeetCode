/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let maxJump = 0;
    for(let i = 0; i < nums.length; i++) {
        if( i > maxJump) return false;
        maxJump = Math.max(nums[i] + i, maxJump);
    }

    return true;
};