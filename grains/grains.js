module.exports=function(){
	return {
		square: function(n){ return Math.pow(2, n-1) },
		total: function(){ return Math.pow(2, 64)-1 }
	}
};