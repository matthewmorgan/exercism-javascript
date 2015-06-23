
var counts = {
	A: 0,
	T: 0,
	C: 0,
	G: 0
};

module.exports = function(strand) {
	strand=strand || "";
	if (strand.match(/[^ACTG]/)){
		throw {
			name: "an exception",
			message: "alien DNA?"
		}
	}
	return {
		count: function(nucleotide){
			var result=0;
			for (var ii=0;ii<strand.length;ii++){
				if (strand[ii]===nucleotide){
					result++;
				}
			}
			counts[nucleotide]=result;
			return result;
		},
		histogram: function() {
			for (key in counts){
				this.count(key);
			}
			return counts;
		}
	}
};



