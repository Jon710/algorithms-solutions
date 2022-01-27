function swap(a, b, array) {
  const temp = array[b];
  array[b] = array[a];
  array[a] = temp;
}

function moveElementToEnd(array, toMove) {
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    while (start < end && array[end] === toMove) end--;

    if (array[start] === toMove) {
      swap(start, end, array);
    }

    start++;
  }

  return array;
}

// Do not edit the line below.
exports.moveElementToEnd = moveElementToEnd;
