module.exports = function(limit){
	var p=2;
	var range=[];
	var primes=[];
	for (var ii=2;ii<=limit;ii++){
		range[ii]={val: ii, prime: true};
	};
	for (var ii=2;ii<=limit/2;ii++){
		for (var jj=2*p;jj<=limit;jj+=p){
			range[jj].prime && range[jj].val % p ===0 ? range[jj].prime=false : null;
		}
		p++;
	}
	for (var key in range){
		range[key].prime ? primes.push(+key) : null;
	}
	return {
		primes: primes
	};
};

      
