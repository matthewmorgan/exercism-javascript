module.exports = function(input){
	return input.match(/\S+/g).reduce(function(counts, word){
		counts[word] = counts.hasOwnProperty(word) ? counts[word]+1 : 1;
		return counts;
	}, {});
};