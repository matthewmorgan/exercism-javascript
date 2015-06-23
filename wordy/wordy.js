var ArgumentError = function(){
	return {
		name: "argument error",
		message: "oops"
	};
};

var re=new RegExp(/(plus|minus|divided by|multiplied by)+/g);

var Wordy = function(question){
	this.numbers = question.match(/[-]{0,1}\d+/g);
	this.operands = question.match(re);
};

Wordy.prototype.answer = function(){
	if (!this.numbers || !this.operands){
		throw (new ArgumentError());
	}
	var ii=1;
	var jj=0;
	var result=+this.numbers[0];
	while (ii<this.numbers.length+1){
		var op=this.operands[jj++];
		var b=+this.numbers[ii] || null;
		switch (op) {
			case 'plus' : {
				result+=b;
				break;
			}
			case 'minus' : {
				result-=b;
				break;
			}
			case 'multiplied by' : {
				result*=b;
				break;
			}
			case 'divided by' : {
				result/=b;
				break;
			}
		}
		ii++;
	}
	return result;
};

module.exports.WordProblem = Wordy;
module.exports.ArgumentError = ArgumentError;



