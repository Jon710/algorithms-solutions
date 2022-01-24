function smallestDifference(arrayOne, arrayTwo) {
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let pointerOne = 0;
  let pointerTwo = 0;
  let result = [];
  let smallestDifference = Infinity;
  let current = Infinity;

  while (pointerOne < arrayOne.length && pointerTwo < arrayTwo.length) {
    let firstNum = arrayOne[pointerOne];
    let secondNum = arrayTwo[pointerTwo];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      pointerOne++;
    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      pointerTwo++;
    } else {
      return [firstNum, secondNum];
    }

    if (smallestDifference > current) {
      smallestDifference = current;
      result = [firstNum, secondNum];
    }
  }

  return result;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
