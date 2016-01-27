const notAlpha = /[^a-z]+/gi,
    alphaLength = 26;

module.exports = function(candidate) {
  const cleaned = [...candidate.replace(notAlpha, '').toLowerCase()];
  const unique = new Set(cleaned);

  return {
    isPangram:  () => {
      return unique.size === alphaLength;
    }
  }
};