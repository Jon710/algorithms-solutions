function isMonotonic(array) {
  if (array.length <= 2) return true;

  let isIncreasing = true;
  let isDecreasing = true;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) isIncreasing = false;
    if (array[i] < array[i + 1]) isDecreasing = false;
  }

  return isIncreasing || isDecreasing;
}

// Do not edit the line below.
exports.isMonotonic = isMonotonic;
