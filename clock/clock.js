// clock.js

exports.at = function(hour, minute){
	var MINUTESPERDAY = 1440;
	
	var clock= {
		hour: hour,
		minute: minute || 0
	};
	
	function formatNum(num){
		var numString=num.toString();
		return (numString.length===1 ? "0"+numString : numString);
	};
	
	function adjustTime(delta){
		
		/*
		* keep only portion that affects TOD, discarding multiples
		* of 24 hrs.
		*/
		if (delta>=MINUTESPERDAY){
			delta=delta % MINUTESPERDAY;
		}
		var currentMinutes=clock.hour*60+clock.minute;
		var newMinutes=(currentMinutes+delta) % MINUTESPERDAY;
		
		//if wrapping backward, reset as needed
		if (newMinutes<0){
			newMinutes+=MINUTESPERDAY;
		}
		clock.hour = Math.floor(newMinutes/60);
		clock.minute = newMinutes-clock.hour*60;
	}

	return {
		clock: clock,
		toString : function(){
			return formatNum(clock.hour)+":"+formatNum(clock.minute);
		},
		plus: function (minutes) {
			adjustTime(minutes);
			return this;
		},
		minus: function (minutes) {
			adjustTime(-minutes);
			return this;
		},
		equals: function(otherClock){
			return (clock.hour===otherClock.clock.hour && clock.minute===otherClock.clock.minute);
		}
	}
};

