var Grains=function(){};

Grains.prototype.square=function(number){
	return Math.pow(2, number-1);
};

//nothing in the spec that says the number of squares is variable...?
Grains.prototype.total = function(){
	return Math.pow(2, 64)-1;
}

module.exports=Grains;