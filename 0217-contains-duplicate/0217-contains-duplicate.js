/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const myMap = new Map()

    for (let i = 0; i < nums.length; i++) {
        if (!myMap.has(nums[i])) {
            myMap.set(nums[i], 1)
        } else if (myMap.get(nums[i]) === 1) {
            myMap.set(nums[i], 2)
            return true
        }
    }

    return false
};