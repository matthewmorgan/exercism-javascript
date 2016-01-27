var GIGA_IN_MILLIS=1000000000000;

var Gigasecond = module.exports = function(start){
	this.start=start;
};

Gigasecond.prototype.date = function(){
	return new Date(new Date(+this.start+GIGA_IN_MILLIS).toDateString());
};

      