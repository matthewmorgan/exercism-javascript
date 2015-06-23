var DAYS = ['Sunday','Monday','Tuesday','Wednesday', 'Thursday','Friday','Saturday'];
var RANKS = ['first','second','third','fourth','last'];

var Meetup = module.exports = function (month, year){
  var self = this instanceof Meetup ? this : Object.create(Meetup.prototype);
  self.month=month;
  self.year=year;
};

DAYS.forEach(function(day){
  Meetup.prototype[day.toLowerCase().replace('day','teenth')]= function(){
    var dayNum=this.getFirstDayNumber(day);
    var teenth=14+dayNum % 6 - Math.floor(dayNum/6);
    return new Date(this.year, this.month, teenth);
  };
  RANKS.forEach(function(rank){
    Meetup.prototype[rank+day] = function() {
      var dayNum=this.getFirstDayNumber(day);
      var n=RANKS.indexOf(rank);
      var nthDay=dayNum+(7*n);
      var meetupDate = new Date(this.year, this.month, nthDay);
      meetupDate.getMonth()!==this.month ? meetupDate=new Date(this.year, this.month, nthDay-7) : {};
      return meetupDate;
    };
  });
});

Meetup.prototype.getFirstDayNumber = function(dayName){
  var date=new Date(this.year, this.month, 1);
  while (DAYS[date.getDay()].toLowerCase()!==dayName.toLowerCase()){
    date.setDate(date.getDate()+1);
  }
  return date.getDate();
};