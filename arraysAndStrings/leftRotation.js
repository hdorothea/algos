// Given an array of integers and a number perform n left rotations on the array.
function getLeftRotatedNormalizedIndex(i, n, arrayLength) {
  let leftRotated = i - n;
  if (leftRotated < 0) {
    leftRotated = arrayLength + leftRotated;
  }
  return leftRotated;
}

function rotateLeft(array, n) {
  const rotatedArray = [];
  for (const [element, index] of array.entries()) {
    const rotatedIndex = getLeftRotatedNormalizedIndex(index, n, array.length);
    rotatedArray[rotatedIndex] = element;
  }
  return rotatedArray;
}

const rotated = rotateLeft([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
console.log(rotated);

