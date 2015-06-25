var getAddends = function(value){
	return value.split('').reverse('').reduce(function(prev, curr, ii){
	  (ii % 2 !== 0) ? prev.push(+curr*2 >=10 ? +curr*2-9 : +curr*2) : prev.push(+curr);
	  return prev;
	},[]).reverse();
};

var getChecksum = function(valueArray){
	return valueArray.reduce(function(prev, curr){
		return prev+=(+curr);
	}, 0);
};

var getCheckDigit = function(value){
	return +value.charAt(value.length-1);
};

var computeCheckDigit = function(value){
	var checksum=+getChecksum(getAddends(value));
	return 10-(checksum % 10);
};

var isValid = function(value){
	return (getChecksum(getAddends(value))%10===0);
};

var create = function(value){
	var checkDigit=computeCheckDigit(value).toString();
	return (value+checkDigit);
};

var Luhn = module.exports = function(accountNumber){
	var value=accountNumber.toString();
	return {
		checkDigit : getCheckDigit(value),
		checksum : getChecksum(getAddends(value)),
		addends : getAddends(value),
		valid: isValid(value),
		create: function(raw){
			create(raw);
		}
	};
};

Luhn.create = function(raw){
	return create(raw);
};