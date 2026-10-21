/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let i = m - 1;      // last real number in nums1
    let j = n - 1;      // last number in nums2
    let k = m + n - 1;  // last slot in nums1, where the next biggest number goes

    // keep going while nums2 still has numbers left to place
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];  // nums1's number is bigger, so put it at the back
            i--;
        } else {
            nums1[k] = nums2[j];  // nums2's number is bigger (or nums1 has run out)
            j--;
        }
        k--;  // this slot is filled, move one step left
    }
};