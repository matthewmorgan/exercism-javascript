function sum(a,b,c){
	return a+b+c;
};

function product(a,b,c){
	return a*b*c;
};

function isPythagorean(a,b,c){
	return (a*a+b*b===c*c);
};
	
function triplets(params){
	var max=params.maxFactor;
	var min=params.minFactor || 2;
	var targetSum = params.sum;
	var result=[];
	for (var ii=min;ii<=max;ii++){
		for (var jj=ii+1;jj<=max;jj++){
			for(var kk=jj+1;kk<=max;kk++){
				isPythagorean(ii,jj,kk) ? result.push(new Triplet(ii,jj,kk)) : {}; 
			}
		}	
	};
	
	function isTargetSum(triplet){
		return triplet.sum()===targetSum;
	};
	
	targetSum ? result=result.filter(isTargetSum) : {};
	
	return result;
};

var Triplet = function(a,b,c){
	return {
		sum: function(){
			return sum(a,b,c);
		},
		product: function(){
			return product(a,b,c);
		},
		isPythagorean: function(){
			return isPythagorean(a,b,c);
		}
	};
};

Triplet.where = function(params){
	return triplets(params);
};

module.exports=Triplet;
