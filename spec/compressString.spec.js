const compressString = require('../arrays_strings/compressString');

describe('compressString', () => {
  beforeEach(() => {

  });

  it('should compress if compressin shortens', () => {
    const compressedString = compressString.compress('aabbbcddddd');
    expect(compressedString).toEqual('a2b3c1d5');
  });

  it('should not compress if compression does not shorten', () => {
    const compressedString = compressString.compress('abc');
    expect(compressedString).toEqual('abc');
  });

  it('should compress if all character are the same', () => {
    const compressedString = compressString.compress('aaaa');
    expect(compressedString).toEqual('a4');
  });

  it('should not compress single character', () => {
    const compressedString = compressString.compress('a');
    expect(compressedString).toEqual('a');
  });
});
