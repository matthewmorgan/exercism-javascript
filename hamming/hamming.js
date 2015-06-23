module.exports = function(a, b){
	if (!a || !b || (a.length !== b.length)){
		throw (new Error("DNA strands must be of equal length."))
	}
	return a.split('').reduce(function(prev, curr, ii){
		return prev += (curr!== b.charAt(ii) ? 1 : 0);
	},0)
};

      