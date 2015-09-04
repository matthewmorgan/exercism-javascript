function getMatches(doMatch, db, filter){
	var matches=[];
	for (var ii=0;ii<db.length;ii++){
		doMatch === filter(db[ii]) ? matches.push(db[ii]) : {};
	}
	return matches;
};

module.exports = (function(){
	return {
		keep: function(db, filter){
			return getMatches(true, db, filter);
		},
		discard: function(db, filter){
			return getMatches(false, db, filter);
		}
	};
})();

