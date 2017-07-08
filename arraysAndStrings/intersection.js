// write a function that returns the intersection of two arrays

function getIntersection(array1, array2) {
  const map1 = new Map();

  for (const element of array1) {
    if (map1.has(element)) {
      const freq = map1.get(element) + 1;
      map1.set(element, freq);
    } else {
      map1.set(element, 1);
    }
  }

  const intersection = [];
  for (const element of array2) {
    if (map1.has(element)) {
      intersection.push(element);
      const freq = map1.get(element) - 1;
      if (freq === 0) {
        map1.delete(element);
      } else {
        map1.set(element, freq);
      }
    }
  }

  return intersection;
}

console.log(getIntersection([1, 5, 4, 2], [8, 91, 4, 1, 3]));
console.log(getIntersection([1, 1, 5, 4, 4, 2], [1, 8, 91, 4, 1, 3]));
