module.exports = function(old){
	return Object.keys(old).reduce(function(nu, k){
		old[+k].forEach(function(l){ nu[l.toLowerCase()]=+k; });
		return nu;
	},{});
};
