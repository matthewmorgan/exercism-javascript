'use strict';
module.exports = function(input){
	this.columns=[];
	this.rows=input.split('\n').map(function(row){
		return row.split(' ')
				.reduce(function(prev, curr){
						prev.push(+curr);
						return prev;
					},[]);
	});
	for (var ci=0;ci<this.rows.length;ci++){
		this.columns[ci]=[];
		this.rows.forEach(function(row){
			this.columns[ci].push(row[ci]);
		}.bind(this));
	};
};



