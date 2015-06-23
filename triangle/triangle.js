//triangle.js

var Triangle = function(a,b,c){
	
	function inequality(){
		return (a+b>c && a+c>b && b+c>a);
	};
	
	function checkType(){
		if (a===b && b===c){
			return "equilateral";
		}
		if (a===b || a===c || b===c){
			return "isosceles";
		}
		return "scalene";
	};
	
	return {
		kind : function(){
			if (inequality()){
				return checkType();
			}
			throw {
				name: "triangle exception",
				message: "these are not the droids you're looking for"
			}
		}
	};
};
	 
module.exports=Triangle;
	