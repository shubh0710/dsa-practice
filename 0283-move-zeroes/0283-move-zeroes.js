/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] === 0 && nums[i] !== 0) {
            nums[k] = nums[i]
            nums[i] = 0
            k += 1;
        } else if (nums[i - 1] !== 0) {
            k += 1;
        } else {
            continue;
        }
    }

    return nums
};