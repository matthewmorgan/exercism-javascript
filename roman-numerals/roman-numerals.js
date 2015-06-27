var Roman = module.exports = function(decimal){
	var ROMANS = {
		1: ["","I","II","III","IV","V","VI","VII","VIII","IX"],
		10: ["", "X", "XX", "XXX", "XL","L","LX","LXX","LXXX","XC"],
		100: ["","C", "CC","CCC","CD","D","DC","DCC","DCCC","CM"],
		1000: ["","M","MM","MMM"]	
	};
	
	var decimalDigits=decimal.toString().split("");
	var expOffset=decimalDigits.length-1;
	
	return decimalDigits.reduce(function(prev, current, ii){
		return prev+ROMANS[Math.pow(10, expOffset-ii)][+current];
	}, "");
};



      
      