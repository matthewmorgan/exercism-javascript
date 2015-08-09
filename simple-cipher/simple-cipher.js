var MAXCHAR = 122, MINCHAR = 97, ALPHABETLENGTH=26;

function generateKey(){
	return Array.apply(null, Array(100)).map(function(){
		return String.fromCharCode(Math.floor(Math.random() * ALPHABETLENGTH) + MINCHAR);
	}).join('');
}

function xCode(key, inText, sign){
	return inText.split('').reduce(function(outText, letter, ii){
		var xCharCode = letter.charCodeAt(0) + sign*(key.charCodeAt(ii % key.length) - MINCHAR);
		(xCharCode>MAXCHAR || xCharCode<MINCHAR) ? xCharCode -= sign*(ALPHABETLENGTH) : {};
		outText += String.fromCharCode(xCharCode);
		return outText;
	}, "");
}

module.exports = function(key){
	if (typeof key === 'undefined'){
		key = generateKey();
	} else if (key.length === 0 || key.match(/[^a-z]/,"g")){
		throw(new Error("Bad key"));
	}

	return {
		key: key,
		encode: function(plainText){
			return xCode(this.key, plainText, 1);
		},
		decode: function(encodedText){
			return xCode(this.key, encodedText, -1);
		}
	};
};