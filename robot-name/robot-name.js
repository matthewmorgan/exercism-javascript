var used=[];

module.exports = function(){

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
		while (used[temp]){ temp=generateName(); }
		used.push(temp);
		return temp;
	};

	var name=generateName();

	return {
		reset: function(){ this.name=generateName(); },
		name: name,
		usedNames: used
	}
};