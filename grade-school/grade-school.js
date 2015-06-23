// grade-school.js
var School = function(){

	var db={};
	return {
		add: function(name, grade){
			var classNames=db[grade] || [];
			classNames.push(name);
			classNames.sort();
			db[grade]=classNames;
		},
		grade: function(grade){
			return db[grade] || [];
		},
		roster: function(){
			return db;
		}
	}

};

module.exports=School;