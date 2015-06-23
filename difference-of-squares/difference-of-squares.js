var pow=Math.pow;

// see http://stackoverflow.com/questions/15593428
module.exports = function(n){
	return {
		squareOfSums: pow((n*(n+1)/2),2),
		sumOfSquares: pow(n,3)/3+pow(n,2)/2+n/6,
		difference: -(3*pow(n,2)+2*n)*(1-pow(n,2))/12
	};
};
