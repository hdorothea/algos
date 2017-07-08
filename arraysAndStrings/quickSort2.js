// implement quicksort without indexes

function swap(typedArray, i, u) {
  const temp = typedArray[i];
  typedArray[i] = typedArray[u];
  typedArray[u] = temp;
}

function quickSort(typedArray) {
  if (typedArray.length <= 1) {
    return;
  }

  if (typedArray.length === 2) {
    if (typedArray[0] > typedArray[1]) {
      swap(typedArray, 0, 1);
      return;
    }
  }

  const pivot = typedArray[0];
  let firstBiggerI;
  for (let i = 0; i < typedArray.length; i++) {
    if (typedArray[i] <= pivot) {
      if (firstBiggerI) {
        swap(typedArray, i, firstBiggerI);
        ++firstBiggerI;
        continue;
      }
    }

    if (typedArray[i] > pivot && !firstBiggerI) {
      firstBiggerI = i;
    }
  }

  if (firstBiggerI) {
    swap(typedArray, 0, (firstBiggerI - 1));
  } else {
    swap(0, (typedArray.length - 1));
    return;
  }

  quickSort(typedArray.subarray(0, firstBiggerI - 1));
  quickSort(typedArray.subarray(firstBiggerI, typedArray.length));
}

const array = [3, 2, 8, 1, 7, 10, 15, 1, 2];
const buffer = new ArrayBuffer(array.length);
const typedArray = new Uint8Array(buffer);
typedArray.set(array);

quickSort(typedArray);
console.log(typedArray);