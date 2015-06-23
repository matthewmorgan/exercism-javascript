//etl.js

var Transform = function(old){
	var newData={};
	for (score in old){
		var letters=old[score];
		for (ii in letters){
			newData[letters[ii].toLowerCase()]=parseInt(score);
		}
	}
	return newData;
};

module.exports=Transform;

