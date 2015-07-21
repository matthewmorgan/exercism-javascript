module.exports = Robot = function(){

	var getRandomInt = function(min, max) {
		return Math.floor(Math.random() * (max - min)) + min;
	};
	var getRandomLetter = function(){
		return String.fromCharCode(getRandomInt(65,90));
	};
	var generateName = function(){
		var temp=getRandomLetter()+getRandomLetter();
		temp+=getRandomInt(0,9);
		temp+=getRandomInt(0,9);
		temp+=getRandomInt(0,9);
		return temp;
	};

	var name=generateName();

	return {
		reset: function(){
			this.name=generateName();
		},
		name: name
	}
};