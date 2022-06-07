/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
   let intersect = [];
    nums1 = [...new Set(nums1)];
   nums1.forEach(num => {
      if(nums2.includes(num)) {
         intersect.push(num);
      }
   })

   return (intersect);
};