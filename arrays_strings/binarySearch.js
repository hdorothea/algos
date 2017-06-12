function binarySearch(query, sorted) {
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    let middle = Math.floor((left + right) / 2);
    if (middle === query) {
      return true;
    }

    if (query < middle) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  if (sorted[right] === query) {
    return true;
  } else {
    return false;
  }
}

binarySearch(6, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

module.exports = {
  binarySearch
};
