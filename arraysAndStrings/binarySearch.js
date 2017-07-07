function binarySearch(query, sorted) {
  let left = 0;
  let right = sorted.length - 1;
  while (left < right) {
    const middle = Math.floor((left + right) / 2);
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

function binarySearchRecursive(query, sorted) {
  if (sorted.length === 0) {
    return false;
  }

  const middleI = Math.floor((sorted.length - 1) / 2);
  if (query === sorted[middleI]) {
    return true;
  }

  if (query < sorted[middleI]) {
    return binarySearchRecursive(query, sorted.slice(0, middleI));
  } else {
    return binarySearchRecursive(query, sorted.slice(middleI + 1, sorted.length));
  }
}

console.log(binarySearchRecursive(0, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));

module.exports = {
  binarySearch,
  binarySearchRecursive
};
