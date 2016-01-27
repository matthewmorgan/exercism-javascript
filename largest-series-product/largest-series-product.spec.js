var Series = require('./largest-series-product');

describe('Series', function () {

  it('digits', function () {
    expect(new Series('0123456789').digits).toEqual([0,1,2,3,4,5,6,7,8,9]);
  });

  it('maintains digit order', function () {
    expect(new Series('9876543210').digits).toEqual([9,8,7,6,5,4,3,2,1,0]);
  });

  it('returns empty array for no digits', function () {
    expect(new Series('').digits).toEqual([]);
  });

  it('slices by 2', function () {
    expect(new Series('01234').slices(2))
        .toEqual([[0, 1], [1, 2], [2, 3], [3, 4]]);
  });

  it('slices by 3', function () {
    expect(new Series('982347').slices(3))
        .toEqual([[9, 8, 2], [8, 2, 3], [2, 3, 4], [3, 4, 7]]);
  });

  it('can get the largest product of 2', function () {
    expect(new Series('0123456789').largestProduct(2)).toBe(72);
  });

  it('works for a tiny number', function () {
    expect(new Series('19').largestProduct(2)).toBe(9);
  });

  it('can get the largest product of 3', function () {
    expect(new Series('1027839564').largestProduct(3)).toBe(270);
  });

  it('can get the largest product of a big number', function () {
    var largeNumber = '73167176531330624919225119674426574742355349194934';
    expect(new Series(largeNumber).largestProduct(6)).toBe(23520);
  });

  it('returns 0 if all digits are zero', function () {
    expect(new Series('0000').largestProduct(2)).toBe(0);
  });

  it('returns 0 if all spans contain zero', function () {
    expect(new Series('99099').largestProduct(3)).toBe(0);
  });

  it('returns 1 for empty string and zero slice length', function () {
    expect(new Series('').largestProduct(0)).toBe(1);
  });

  it('returns 1 for non-empty string and zero slice length', function () {
    expect(new Series('123').largestProduct(0)).toBe(1);
  });

  it('throws an error for slices bigger than the number', function () {
    expect(function () {
      new Series('123').largestProduct(4);
    }).toThrow(new Error('Slice size is too big.'));
  });

  it('throws an error for empty string and non-zero slice length', function () {
    expect(function () {
      new Series('').largestProduct(1);
    }).toThrow(new Error('Slice size is too big.'));
  });

});
