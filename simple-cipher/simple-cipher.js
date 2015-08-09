var MAXCHAR = 122, MINCHAR = 97, ALPHABETLENGTH=26;

function generateKey(){
	return Array.apply(null, Array(100)).map(function(){
		return String.fromCharCode(Math.floor(Math.random()*ALPHABETLENGTH)+MINCHAR);
	}).join('');
}

module.exports = function(key){
	if (typeof key === 'undefined'){
		key=generateKey();
	} else if (key.length===0 || key.match(/[^a-z]/,"g")){
		throw(new Error("Bad key"));
	}		

	function encode(plaintext){
		return plaintext.split('').reduce(function(encodedText, letter, ii){
				var encodedCharCode=key.charCodeAt(ii % key.length)-MINCHAR+letter.charCodeAt(0);
				encodedCharCode>MAXCHAR ? encodedCharCode-=ALPHABETLENGTH : {};
				encodedText+=String.fromCharCode(encodedCharCode);
				return encodedText;
			}, "");
	}
	
	function decode(encodedText) {
		return encodedText.split('').reduce(function(plainText, letter, ii){
			var plainCharCode=letter.charCodeAt(0)-(key.charAt(ii % key.length).charCodeAt(0)-MINCHAR);
			plainCharCode<MINCHAR ? plainCharCode+=ALPHABETLENGTH : {};
			plainText+=String.fromCharCode(plainCharCode);
			return plainText;
		}, "");
	}

	return {
		key: key,
		encode: encode,
		decode: decode
	};
};