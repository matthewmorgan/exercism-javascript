// leap.js

var Leap = function(year){
	return (year % 400 === 0 || (year % 100!==0 && year % 4 === 0));
};

module.exports=Leap;