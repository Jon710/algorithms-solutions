/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// using splice HOF
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums) return 0;

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === val) {
        nums.splice(i, 1);
        i--;
      }
    }

    return nums.length;
  }
};

// using pointer
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums) return 0;
    let pointer1 = 0;

    for (let pointer2 = 0; pointer2 < nums.length; pointer2++) {
      if (nums[pointer2] !== val) {
        nums[pointer1] = nums[pointer2];
        pointer1++;
      }
    }

    return pointer1;
  }
};

