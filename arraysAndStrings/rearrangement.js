// write a function to determine if a string
// can be rearranged to read the same forwards and backwards

function rearrangableAnagramSort(string) {
  const sortedString = string.split('').sort().join('');
  let oddOcurrenceCount = 0;
  for (let i = 0; i < string.length; i += 2) {
    if (sortedString[i] !== sortedString[i + 1]) {
      oddOcurrenceCount++;
      i++;
      if (oddOcurrenceCount > 1) {
        return false;
      }
    }
  }
  return true;
}

function rearrangableAnagramHash(string) {
  const occurenceCounts = {};

  for (const char of string) {
    if (!occurenceCounts[char]) {
      occurenceCounts[char] = 1;
    } else {
      occurenceCounts[char]++;
    }
  }
  let oddOccurenceCount = 0;

  for (const count of Object.values(occurenceCounts)) {
    if (count % 2 !== 0) {
      oddOccurenceCount++;
      if (oddOccurenceCount > 1) {
        return false;
      }
    }
  }
  return true;
}

console.log(rearrangableAnagramHash('annnaseseduu'));
console.log(rearrangableAnagramHash('annnnaseseduu'));

module.exports = {
  rearrangableAnagramHash,
  rearrangableAnagramSort
};
