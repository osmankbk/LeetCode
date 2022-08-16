/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if(nums.length < 2) return nums;
    let leftSwap;

   for(let i = nums.length -2; i >= 0; i--) {

        if(nums[i] < nums[i + 1]) {
            leftSwap = i;
            break;
        }
   }

   for(let i = nums.length -1; i > leftSwap; i--) {
        if(nums[i] > nums[leftSwap]) {
            let rightSwap = i;
            [ nums[leftSwap], nums[rightSwap] ] = [ nums[rightSwap], nums[leftSwap] ];
            let allRighSideElements = nums.splice(leftSwap + 1);
            allRighSideElements.sort((a,b) => (a-b));
            nums.push(...allRighSideElements)
            return nums;
        }
   }

    return nums.sort((a,b) => (a - b));
};