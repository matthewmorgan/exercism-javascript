//var pow=Math.pow;
//
//// see http://stackoverflow.com/questions/15593428
//module.exports = function(n){
//	return {
//		squareOfSums: pow((n*(n+1)/2),2),
//		sumOfSquares: pow(n,3)/3+pow(n,2)/2+n/6,
//		difference: -(3*pow(n,2)+2*n)*(1-pow(n,2))/12
//	};
//};



        "use strict";

var Squares = function (num) {
    // this._num = num;
    var s1 = 0;
    var s2 = 0;

    for (var i = 1; i <= num; i++) {
        s1 += i;
        s2 += i * i;
    }

    this.squareOfSums = s1 * s1;
    this.sumOfSquares = s2;
    this.difference = this.squareOfSums - this.sumOfSquares;
}


module.exports = Squares;
      