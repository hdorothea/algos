// write a function to print all of the permutations of a given string

let count = 0;
const permutationsMap = {};

function permute(string) {
  if (string.length <= 1) {
    return [string];
  }

  if (permutationsMap[string]) {
    return permutationsMap[string];
  }

  count++;

  const permutations = [];
  for (let i = 0; i < string.length; i++) {
    const prefix = string[i];
    for (const permutation of permute(string.slice(0, i) + string.slice(i + 1, string.length))) {
      permutations.push(prefix + permutation);
    }
  }

  permutationsMap[string] = permutations;
  return permutations;
}

const res = permute('abcde');
console.log(res);
console.log(count);

