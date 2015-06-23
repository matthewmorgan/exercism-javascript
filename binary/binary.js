module.exports = function(binary){
	this.binary=binary;
	return {
		toDecimal: function(){
			return binary.split('').reverse().reduce(function(prev, curr, ii){
				return prev+(curr==='1' ? Math.pow(2,ii) : 0);
			}, 0);
		}
	};
};


