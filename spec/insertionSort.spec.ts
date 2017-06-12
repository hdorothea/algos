const insertionSort = require('../arrays_strings/insertionSort');

describe('insertionSort', () => {
  beforeEach(() => {

  });

  it('should sort an array', () => {
    const sortedArray = insertionSort.insertionSort([3, 2, 8, 1, 7, 10, 15, 1, 2]);
    expect(sortedArray).toEqual([1, 1, 2, 2, 3, 7, 8, 10, 15]);
  });
});
