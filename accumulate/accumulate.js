module.exports = function doOperation(db, operation){
	var result=[];
	for (var ii=0;ii<db.length;ii++){
		result.push(operation(db[ii]))
	}
	return result;
};


      