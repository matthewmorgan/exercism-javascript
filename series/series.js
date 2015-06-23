var Series = module.exports = function(numString){
	this.digits=numString.split('').map(function(digit){
		return +digit;
	});
};

Series.prototype.slices = function(size){
	if (size>this.digits.length) throw new Error('Slice size is too big.');
  return this.digits.reduce(function(result, curr, ii, digits){
    ii<=digits.length-size ? result.push(digits.slice(ii, ii+size)) : {};
    return result;
  },[])
};