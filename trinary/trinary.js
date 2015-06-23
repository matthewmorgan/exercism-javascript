module.exports = function(trinary){
	trinary.match(/^\d+$/) ? {} : trinary='0';
	return {
		toDecimal: function (){
			return +(trinary.split('').reverse().reduce(function(prev, curr, ii){
				return prev+=curr*Math.pow(3, ii);
			},0));
		}	
	};
};