'use strict'

module.exports = (input) => {
	return (typeof input === 'string' ? input.match(/\S+/g) || [] : [])
			.reduce((counts, word) => {
				counts[word] = counts.hasOwnProperty(word) ? counts[word]+1 : 1;
				return counts;
	},{});
};


