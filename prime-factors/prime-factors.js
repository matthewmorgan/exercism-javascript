var PrimeFactors = module.exports = function(){};

PrimeFactors.for = function(num){
	var factors=[];
	var currentFactor=2;
	var remaining=num;
	while (remaining!==1){
		if (remaining % currentFactor === 0){
			factors.push(currentFactor);
			remaining=remaining/currentFactor;
			currentFactor=2;
		} else {
			currentFactor++;
		}
	}
	return factors;
};


