function getLongestNonRepeatingSubstring(string) {
  let start = 0;
  let end = 0;
  const currentLongestPositionMapping = new Map();
  let longestSubstringLength = 0;
  while (end < string.length) {
    if (currentLongestPositionMapping.has(string[end])) {
      while (string[start] !== string[end]) {
        currentLongestPositionMapping.delete(string[start]);
        start += 1;
      }
      start += 1;
    } else {
      currentLongestPositionMapping.add(string[end], end);
    }

    if ((end + 1) - start > longestSubstringLength || end === 0) {
      longestSubstringLength = (end + 1) - start;
    }

    end += 1;
  }

  return longestSubstringLength;
}

console.log(getLongestNonRepeatingSubstring('abcabcbxyzab'));
