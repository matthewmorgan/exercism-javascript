var PrimeFactors = module.exports = function(){ this.factors =[];};

PrimeFactors.prototype.for = function(num, remaining, currentFactor) {
	var currentFactor = currentFactor || 2;
	var remaining = remaining || num;
	if (remaining !== 1) {
		if (remaining % currentFactor === 0) {
			this.factors.push(currentFactor);
			remaining /= currentFactor;
			currentFactor = 2;
		} else {
			currentFactor++;
		}
		return this.for(num, remaining, currentFactor);
	}
	return this.factors;
};