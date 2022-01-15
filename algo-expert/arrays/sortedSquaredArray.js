// SOLUTION 1: O(n logn) because of the sorting | O(n) space where n is length of array
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    sortedSquares[i] = array[i] * array[i];
  }

  sortedSquares.sort((a, b) => a - b);

  return sortedSquares;
}

// SOLUTION 2:  O(n) time | O(n) space - where n is length of the array
function sortedSquaredArray(array) {
  const sortedSquares = new Array(array.length).fill(0);

  let firstPointer = 0;
  let lastPointer = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    if (Math.abs(array[firstPointer]) > Math.abs(array[lastPointer])) {
      sortedSquares[i] = array[firstPointer] * array[firstPointer];
      firstPointer++;
    } else {
      sortedSquares[i] = array[lastPointer] * array[lastPointer];
      lastPointer--;
    }
  }

  return sortedSquares;
}
