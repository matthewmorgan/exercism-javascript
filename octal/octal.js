//thanks to schorsch3000 for the core algorithm...

function toDecimal(num){
	var decimal=0;
	num.split("").forEach(function(octalDigit){
        decimal*=8;
        decimal+=parseInt(octalDigit);
  	});
  	return decimal;
};

var Octal = function(octal){
	octal.match(/[\D|8]/) ? octal='0' : octal=octal;
	return {
		toDecimal: function(){
			return toDecimal(octal);
		}
	};
};

module.exports=Octal;