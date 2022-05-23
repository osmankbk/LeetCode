/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let marged = [...nums1, ...nums2];
    let margedSort = marged.sort((a,b) => (a-b));
    
    if(marged.length % 2 !== 0) {
        let middle = Math.floor(margedSort.length / 2);
       return margedSort[middle];
    } else {
        let middle = margedSort.length / 2;
        return (margedSort[middle] + margedSort[middle -1]) / 2;
    }
};