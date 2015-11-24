exports.at = function (hour, minute) {
  var MINUTESPERDAY = 1440;

  var clock = (hour || 0) * 60 + (minute || 0);

  function formatNum(num) {
    var numString = num.toString();
    return (numString.length === 1 ? "0" + numString : numString);
  };

  function adjustTime(delta) {
    delta = delta >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;
    var newMinutes = (clock + delta) % MINUTESPERDAY;
    clock = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;
  }

  return {
    clock:    clock,
    toString: function () {
      return formatNum(Math.floor(clock / 60)) + ":" + formatNum(clock % 60);
    },
    plus:     function (minutes) {
      adjustTime(minutes);
      return this;
    },
    minus:    function (minutes) {
      adjustTime(-minutes);
      return this;
    },
    equals:   function (otherClock) {
      return clock === otherClock.clock;
    }
  }
};

