// SOLUTION 1: O(n) time | O(1) space - where n is the length of the array
function isValidSubsequence(array, sequence) {
  let arrId = 0;
  let sequenceId = 0;

  while (arrId < array.length && sequenceId < sequence.length) {
    if (array[arrId] === sequence[sequenceId]) sequenceId++;
    arrId++;
  }

  return sequenceId === sequence.length;
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence;
