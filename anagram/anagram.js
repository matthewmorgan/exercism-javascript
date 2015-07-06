function sortChars(str) {
  return str.toLowerCase().split("").sort().join("");
}

var Anagram = function (word) {
  this.word = word;
  this.sortedLetters = sortChars(word);
};

Anagram.prototype.match = function (possible) {
  return (this.word !== possible.toLowerCase() && sortChars(possible) === this.sortedLetters);
}

Anagram.prototype.matches = function (possibles) {
  possibles instanceof Array ? {} : possibles = Array.prototype.slice.call(arguments);
  return possibles.filter(function (possible) {
    return this.match(possible);
  }.bind(this));
};

module.exports = function (word) { return new Anagram(word) };

