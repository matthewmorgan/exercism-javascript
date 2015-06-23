function Series(numString){
	this.digits=numString.split('').map(function(digit){
		return +digit;
	});
};

Series.prototype.slices=function(size){
	if (size>this.digits.length){
		throw(new Error('Slice size is too big.'));
	}
	var result=[];
	for (var ii=0;ii<=this.digits.length-size;ii++){
		result.push(this.digits.slice(ii, ii+size));
	}
	return result;
};

Series.prototype.largestProduct = function (size){
	if (size>this.digits.length){
		throw(new Error('Slice size is too big.'));
	}
	return this.slices(size).map(function(tuple){
		return tuple.reduce(function(prev, curr){
			return prev*=curr;
		},1);
	},[]).sort(function compareNumbers(a, b) { return b-a; })[0];
};

module.exports = Series;