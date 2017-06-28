// given an array of integers find all
// of the pairs of integers adding up to a sum

function decrementValueOrDeleteElement(map, key) {
  let value = map.get(key);
  if (value <= 1) {
    map.delete(key);
  } else {
    map.set(key, --value);
  }

  return map;
}

function getPairsToSum(array, sum) {
  const arrayMap = new Map();

  for (const element of array) {
    if (arrayMap.has(element)) {
      let value = arrayMap.get(element);
      arrayMap.set(element, ++value);
    } else {
      arrayMap.set(element, 1);
    }
  }

  const pairs = [];
  for (const element of array) {
    decrementValueOrDeleteElement(arrayMap, element);
    const difference = sum - element;
    if (arrayMap.has(difference)) {
      pairs.push([element, difference]);
      decrementValueOrDeleteElement(arrayMap, difference);
    }
  }
  return pairs;
}


console.log(getPairsToSum([1, 5, 8, 2, 3, 4], 4));
