function threeNumberSum(array, targetSum) {
  array.sort((a, b) => a - b);

  const result = [];

  // array.length - 2 because we are trying to form triplets
  for (let i = 0; i < array.length - 2; i++) {
    let right = array.length - 1;
    let left = i + 1;

    while (left < right) {
      const currentSum = array[i] + array[right] + array[left];

      if (currentSum === targetSum) {
        result.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (currentSum < targetSum) {
        left++;
      } else if (currentSum > targetSum) {
        right--;
      }
    }
  }

  return result;
}

// Do not edit the line below.
exports.threeNumberSum = threeNumberSum;
