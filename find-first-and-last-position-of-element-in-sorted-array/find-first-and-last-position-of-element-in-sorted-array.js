/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if(!nums.length || !nums.includes(target)) return [-1, -1];
    let [targetFirstIndex, tragetLastIndex] = [nums.indexOf(target), nums.lastIndexOf(target)];
    return[targetFirstIndex, tragetLastIndex];
};