function twoNumberSum(array, targetSum) {
  const set = new Set();

  for (const num of array) {
    let sum = targetSum - num;
    if (set.has(sum)) {
      return [sum, num];
    } else {
      set.add(num);
    }
  }

  return [];
}

// Do not edit the line below.
exports.twoNumberSum = twoNumberSum;
