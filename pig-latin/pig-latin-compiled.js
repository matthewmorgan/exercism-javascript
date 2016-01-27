'use strict';

var PigLatin = function PigLatin() {};

var translateVowelStart = function translateVowelStart(word) {
	return word + 'ay';
};

var translateConsonantStart = function translateConsonantStart(word) {
	var result;
	var quCase = word.match(new RegExp(/^\w{0,1}qu/));
	quCase ? result = getPigWord(word, quCase[0]) : {};
	var chCase = word.match(new RegExp(/^\w{0,1}ch/));
	chCase ? result = getPigWord(word, chCase[0]) : {};
	var thCase = word.match(new RegExp(/^th[r]{0,1}/));
	thCase ? result = getPigWord(word, thCase[0]) : {};
	if (!result) {
		result = word.substr(1, word.length) + word.charAt(0) + 'ay';
	}
	return result;
};

var getPigWord = function getPigWord(word, suffix) {
	return word.substr(suffix.length, word.length - suffix.length) + suffix + 'ay';
};

PigLatin.prototype.translate = function (english) {
	var englishWords = english.split(' ');
	var pigWords = [];
	englishWords.forEach(function (word) {
		word.match(/^[a,e,i,o,u]/) ? pigWords.push(translateVowelStart(word)) : pigWords.push(translateConsonantStart(word));
	});
	return pigWords.join(' ');
};

module.exports = new PigLatin();

//# sourceMappingURL=pig-latin-compiled.js.map