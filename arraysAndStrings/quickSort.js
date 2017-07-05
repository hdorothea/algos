// implement insertion sort

function swap(array, i1, i2) {
  const temp = array[i1];
  array[i1] = array[i2];
  array[i2] = temp;
  return array;
}

function quickSort(unsorted, leftI, rightI) {
  if (rightI <= leftI) {
    return;
  }
  const pivot = unsorted[leftI];
  let firstGreaterI;
  for (let i = leftI + 1; i <= rightI; i++) {
    if (unsorted[i] > pivot && !firstGreaterI) {
      firstGreaterI = i;
      continue;
    }

    if (unsorted[i] <= pivot && firstGreaterI) {
      unsorted = swap(unsorted, firstGreaterI, i);
      firstGreaterI++;
    }
  }
  if (firstGreaterI) {
    swap(unsorted, leftI, firstGreaterI - 1);
    quickSort(unsorted, leftI, firstGreaterI - 2);
    quickSort(unsorted, firstGreaterI, rightI);
  } else {
    swap(unsorted, leftI, rightI);
    quickSort(unsorted, leftI, rightI - 1);
  }
  return unsorted;
}

const array = [3, 2, 8, 1, 7, 10, 15, 1, 2];
quickSort(array, 0, array.length - 1);
module.exports = {
  quickSort
};
