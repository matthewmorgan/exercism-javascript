var GIGA_IN_MILLIS=1000000000000;

var Gigasecond = module.exports = function(born){
	this.born=born;
};

Gigasecond.prototype.date = function(){
	return new Date(new Date(this.born.getTime()+GIGA_IN_MILLIS).toDateString());
};

      