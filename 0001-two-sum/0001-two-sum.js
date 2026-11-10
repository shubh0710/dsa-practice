/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const myMap = new Map(nums.map((num, index) => [num, index]))
    const result = []

    for (let i = 0; i < nums.length; i++) {
        if (myMap.has(target - nums[i]) && myMap.get(target - nums[i]) !== i) {
            result.push(i)
            result.push(myMap.get(target - nums[i]))
            break
        }
    }

    return result
};