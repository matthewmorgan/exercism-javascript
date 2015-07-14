function getAddends(value){
	return value.split('').reverse('').reduce(function(prev, curr, ii){
	  (ii % 2 !== 0) ? prev.push(+curr*2 >=10 ? +curr*2-9 : +curr*2) : prev.push(+curr);
	  return prev;
	},[]).reverse();
};

function getChecksum(valueArray){
	return valueArray.reduce(function(prev, curr){
		return prev+=(+curr);
	}, 0);
};

function getCheckDigit(value){
	return +value.charAt(value.length-1);
};

function computeCheckDigit(value){
	var checksum=+getChecksum(getAddends(value));
	return 10-(checksum % 10);
};

function isValid(value){
	return (getChecksum(getAddends(value))%10===0);
};

function create(value){
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