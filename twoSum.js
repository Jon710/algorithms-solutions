/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  // lookup speed in map is constant O(1)
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    currentValue = nums[i];
    if (map.has(currentValue)) {
      return [map.get(currentValue), i];
    }

    let difference = target - currentValue;
    map.set(difference, i);
  }
};

