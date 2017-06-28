// given two strings consisting of words
// check if all the words in the first string
// are contained in the second

function getFrequencyTable(array) {
  const words2Table = new Map();
  for (const element of array) {
    if (words2Table.has(element)) {
      let value = words2Table.get(element);
      words2Table.set(element, ++value);
    } else {
      words2Table.set(element, 1);
    }
  }
  return words2Table;
}

function areWordsInString(string1, string2) {
  const words1 = string1.toLowerCase().split(' ');
  const words2 = string2.toLowerCase().split(' ');

  const words2FrequencyTable = getFrequencyTable(words2);
  for (const word of words1) {
    if (!(words2FrequencyTable.has(word))) {
      return false;
    }
  }
  return true;
}

const wordsAreInString = areWordsInString('when are you going to come?', 'When the Duck decided it was time to come it turned back and asked: are you guys going to come?');
console.log(wordsAreInString);
