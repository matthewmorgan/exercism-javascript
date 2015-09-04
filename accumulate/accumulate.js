module.exports = function doOperation(db, operation){
	var result=[];
	for (var key in Object.keys(db)){
		result.push(operation(db[key]));
	}
	return result;
};


      