/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let hash = {}
   let intersect = [];
   let rmv_duplicate_nums1 = [...new Set(nums1)];
   let rmv_duplicate_nums2 = [...new Set(nums2)];
  
   for(let i = 0; i < rmv_duplicate_nums1.length; i++) {
      let num = rmv_duplicate_nums1[i];
      hash[num] = true;
   }

   for(const num of rmv_duplicate_nums2) {
      if(hash[num]) intersect.push(num);
   }
   return intersect;
};