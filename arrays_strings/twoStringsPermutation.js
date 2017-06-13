// given 2 strings write a method to check if the two strings are a permutation of one another

function isPermutationSort(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }
  string1 = string1.split('').sort().join('');
  string2 = string2.split('').sort().join('');

  for (let i = 0; i < string1.length; i++) {
    if (string1[i] !== string2[i]) {
      return false;
    }
  }
  return true;
}

function isPermutationHash(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  const string1Set = new Set(string1);

  for (const char of string2) {
    if (!string1Set.has(char)) {
      return false;
    }
  }

  return true;
}


console.log(isPermutationHash('aab', 'baa'));
console.log(isPermutationHash('aab', 'bac'));

module.exports = {
  isPermutationHash,
  isPermutationSort
};

