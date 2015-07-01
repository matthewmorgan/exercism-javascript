var Transform = module.exports = function(old){
	var newData=Object.create(null);
	Object.keys(old).forEach(function(score){
		var letters=old[score];
		Object.keys(letters).forEach(function(letter){
			newData[letters[letter].toLowerCase()] = +score;
		})
	});
	return newData;
};