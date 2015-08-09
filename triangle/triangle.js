module.exports = function(a,b,c){

	function meetsInequality(){ return (a+b>c && a+c>b && b+c>a); }

	function getType(){
		return (a===b && b===c) ? "equilateral"
				: (a===b || a===c || b===c) ? "isosceles"
				: "scalene";
	}

	return {
		kind : function(){
			if (meetsInequality()){
				return getType();
			}
			throw new Exception("These are not the droids you're looking for.");
		}
	};
};
	