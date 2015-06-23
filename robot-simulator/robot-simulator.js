var DIRECTIONS = [ 'north', 'east', 'south', 'west' ];
var INSTRUCTIONS = { L : 'turnLeft', R : 'turnRight', A : 'advance'};

var RobotSimulator = function(){};

RobotSimulator.prototype.orient = function(dir){
  if(DIRECTIONS.indexOf(dir)<0) throw ("Invalid RobotSimulator Bearing");
  this.bearing=dir;
};

RobotSimulator.prototype.turnRight = function(){
  this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing)+1) % 4];
};

RobotSimulator.prototype.turnLeft = function(){
  this.bearing = DIRECTIONS[(DIRECTIONS.indexOf(this.bearing)+3) % 4];
};

RobotSimulator.prototype.at = function(x,y){
  this.coordinates=[x,y];
};

RobotSimulator.prototype.advance = function(){
  var setCoords = {
    'north' : function(){this.coordinates[1]++},
    'south' : function(){this.coordinates[1]--},
    'east' : function(){this.coordinates[0]++},
    'west' : function(){this.coordinates[0]--}
  };
  setCoords[this.bearing].call(this);
};

RobotSimulator.prototype.place = function(place){
  this.orient(place.direction);
  this.at(place.x, place.y);
};

RobotSimulator.prototype.instructions = function(commands){
  return commands.split('').reduce(function(prev, curr){
    prev.push(INSTRUCTIONS[curr]);
    return prev;
  },[]);
};

RobotSimulator.prototype.evaluate = function(commands){
  this.instructions(commands).forEach(function(command){
    this[command].call(this);
  }.bind(this));
};

module.exports = RobotSimulator;