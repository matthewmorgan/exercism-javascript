module.exports = function(){
	var db={};
	return {
		add: function(name, grade){
			var classNames=db[grade] || [];
			classNames.push(name);
			classNames.sort();
			db[grade]=classNames;
		},
		grade: function(grade){
			return db[grade] ? JSON.parse(JSON.stringify(db[grade])) : [];
		},
		roster: function(){
			return JSON.parse(JSON.stringify(db));
		}
	}
};
