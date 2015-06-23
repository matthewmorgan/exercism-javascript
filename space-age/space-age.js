//space-age.js

var earthSecondsPerYear=31557600;

var planetTimeScale = {
	Earth: 1,
	Mercury: .2408467,
	Venus: 0.61519726,
	Mars: 1.8808158,
	Jupiter: 11.862615,
	Saturn: 29.447498,
	Uranus: 84.016846,
	Neptune: 164.79132
}

function SpaceAge(seconds){
	this.seconds=seconds;
};

Object.keys(planetTimeScale).forEach(function(planet){
	SpaceAge.prototype["on"+planet] = function(){
		return +(this.seconds/earthSecondsPerYear/planetTimeScale[planet]).toFixed(2);
	};
});


module.exports=SpaceAge;