// implement bubblesort

function bubbleSort(unsorted) {
  let lastI = unsorted.length - 1;
  let sorted = false;
  while (!sorted) {
    for (let i = 0; i < lastI; i++) {
      sorted = true;
      if (unsorted[i] > unsorted[i + 1]) {
        const temp = unsorted[i];
        unsorted[i] = unsorted[i + 1];
        unsorted[i + 1] = temp;
        sorted = false;
      }
    }
    lastI--;
  }
  return unsorted;
}

module.exports = {
  bubbleSort
};
