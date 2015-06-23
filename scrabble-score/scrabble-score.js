////score is 1 unless specified
//var SCORE = {
//	D : 2,
//	G : 2,
//	B : 3,
//	C : 3,
//	M : 3,
//	P : 3,
//	F : 4,
//	H : 4,
//	V : 4,
//	W : 4,
//	Y : 4,
//	K : 5,
//	J : 8,
//	X : 8,
//	Q : 10,
//	Z : 10
//};
//
//var Scrabble = function(word){
//	return (word || "").toUpperCase().split("").reduce(function(previous, current){
//		return previous+(SCORE[current] || 1);
//	},0);
//
//};

//module.exports = Scrabble;


var score = function(word, wordBonus, ltrWithBonus, ltrBonus){
	wordArray = !word ? [] : word.toUpperCase().split('');
	this.scores = {
		A:1, E:1, I:1, O:1, U:1, L:1, N:1, R:1, S:1, T:1,
		D:2, G:2,
		B:3, C:3, M:3, P:3,
		F:4, H:4, V:4, W:4, Y:4,
		K:5,
		J:8, X:8,
		Q:10, Z:10
	}
	//wordArray = word.split('')
	wordScore = 0
	wordArray.forEach(function(letter){
		wordScore += this.scores[letter];
	})
	if (ltrWithBonus != undefined && ltrWithBonus != '' && ltrWithBonus
			!= null && ltrWithBonus != 0){
		ltrWithBonus=ltrWithBonus.toUpperCase();
		ltrBonus--;//because we've already counted the letter once
		wordScore += this.scores[ltrWithBonus]*ltrBonus;
	}
	if (wordBonus != undefined){
		wordScore *= wordBonus;
	}
	return wordScore;
};

module.exports = score;
