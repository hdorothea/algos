// Write a function to compress a string like aabcccccaaddd to a2b1c5a2d3
// if the compressed version of the string is not shorter return the original

function compress(uncompressed) {
  let count = 1;
  let score = 0;
  const compressed = [];

  if (uncompressed.length <= 1) {
    return uncompressed;
  }

  for (let i = 1; i < uncompressed.length; i++) {
    if (uncompressed[i - 1] === uncompressed[i]) {
      count++;
    }

    if (!(uncompressed[i - 1] === uncompressed[i]) || i === uncompressed.length - 1) {
      compressed.push(uncompressed[i - 1]);
      compressed.push(count.toString());
      score += count - 2;
      count = 1;
    }
  }

  if (score < 1) {
    return uncompressed;
  } else {
    return compressed.join('');
  }
}

module.exports = {
  compress
};
