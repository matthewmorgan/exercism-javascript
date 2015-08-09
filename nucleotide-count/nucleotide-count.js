module.exports = function(strand) {
	strand=strand || '';
	if (strand.match(/[^ACTG]/)) throw new Error();
	var histo = strand.split('').reduce(function(histo, nuc){
		histo[nuc]++;
		return histo;
	},{'A':0, 'T':0,'C':0,'G':0});

	return {
		count: function(nuc) { return histo[nuc] },
		histogram: function() { return histo }
	}
};