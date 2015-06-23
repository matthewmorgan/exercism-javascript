var Raindrops = function(){};

Raindrops.prototype.convert = function(num){
	var drops={
		3: 'Pling',
		5: 'Plang',
		7: 'Plong'
	};
	
	return (Object.keys(drops).reduce(function(prev, curr){
		prev+=(num % curr===0 ? drops[curr] : "");
		return prev;
	},"") || num.toString());
	
};

module.exports = Raindrops;