var Hexadecimal =module.exports = function(input){
	this.input=input.toLowerCase().match(/[0-9a-f]+/g)[0];
	this.input.length !== input.length ? this.input='000000' : {};
};

Hexadecimal.prototype.toDecimal = function(){
	return this.input.split("").reduce(function(decimal, hexDigit){
		hexDigit.match(/[a-f]/) ? hexDigit = hexDigit.charCodeAt(0)-87 : hexDigit = +hexDigit;
        return decimal=(decimal*16)+hexDigit;
  	}, 0);
};