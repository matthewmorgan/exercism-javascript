function getMatches(doMatch, db, filter){
	return db.reduce(function(prev, curr){
		doMatch===filter(curr) ? prev.push(curr) : null;
		return prev;
	},[]);
};

var Strain = function(){
	return {
		keep: function(db, filter){
			return getMatches(true, db, filter);
		},
		discard: function(db, filter){
			return getMatches(false, db, filter);
		}
	};
};

module.exports = Strain();