'use strict'

function sortChars(str) {
  return str.toLowerCase().split("").sort().join("");
}

var Anagram = function (word) {
  this.word = word;
  this.sortedLetters = this.sortChars(word);
};

Anagram.prototype.sortChars = sortChars;

Anagram.prototype.match = function (possible) {
  return (this.word !== possible.toLowerCase() && sortChars(possible) === this.sortedLetters);
}

Anagram.prototype.matches = function (possibles) {
  possibles instanceof Array ? {} : possibles = Array.prototype.slice.call(arguments);
  return possibles.filter(this.match, this);
};

module.exports = function (word) { return new Anagram(word) };

