const binarySearch = require('../arrays_strings/binarySearch');

describe('compressString', () => {
  beforeEach(() => {

  });

  it('should return true if the query is in the sorted array', () => {
    const contains = binarySearch.binarySearch(6, [0, 2, 6, 100, 158, 557, 899, 900]);
    expect(contains).toBeTruthy();
  });

  it('should return true if the query is in the sorted one element array', () => {
    const contains = binarySearch.binarySearch(6, [6]);
    expect(contains).toBeTruthy();
  });

  it('should return false for an empty array', () => {
    const contains = binarySearch.binarySearch(6, []);
    expect(contains).toBeFalsy();
  });

  it('should return false if the query is not in the sorted array', () => {
    const contains = binarySearch.binarySearch(6, [89, 90, 908, 1045, 6000]);
    expect(contains).toBeFalsy();
  });
});
