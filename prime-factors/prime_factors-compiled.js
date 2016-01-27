'use strict';

exports['for'] = function (num) {
	var factors = [],
	    currentFactor = 2;

	while (num !== 1) {
		if (num % currentFactor === 0) {
			factors.push(currentFactor);
			num /= currentFactor;
			currentFactor = 2;
		} else {
			currentFactor++;
		}
	}
	return factors;
};

//# sourceMappingURL=prime_factors-compiled.js.map