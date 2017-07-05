// implement insertion sort

function insertionSort(unsorted) {
  for (let i = 1; i < unsorted.length; i++) {
    // running index
    let u = i;
    while (u > 0) {
      if (unsorted[u - 1] > unsorted[u]) {
        const temp = unsorted[u];
        unsorted[u] = unsorted[u - 1];
        unsorted[u - 1] = temp;
      } else {
        break;
      }
      u--;
    }
  }
  return unsorted;
}

insertionSort([3, 2, 8, 1, 7, 10, 15, 1, 2]);

module.exports = {
  insertionSort
};
