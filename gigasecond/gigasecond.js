//gigasecond.js

var GIGA=1000000000000; //giga in milli
var Gigasecond = function(birthdate){
	this.birthdate=birthdate;
};

Gigasecond.prototype.date = function(){
	var gigaDate=new Date(new Date(this.birthdate.getTime()+GIGA).toDateString());
	return gigaDate;
};

module.exports=Gigasecond;


      