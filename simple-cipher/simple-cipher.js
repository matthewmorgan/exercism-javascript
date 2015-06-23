
var MAXCHAR = 122;
var MINCHAR = 97;
var ALPHABETLENGTH=26;

function generateKey(){
	var newKey="";
	for (var ii=0;ii<100;ii++){
		newKey+=String.fromCharCode(Math.floor(Math.random()*26)+97);
	}
	return newKey;	
};


var Cipher = function(key){
	if (typeof key === 'undefined'){
		key=generateKey();
	} else if (key.length===0 || key.match(/[^a-z]/,"g")){
		throw(new Error("Bad key"));
	}		

	function encode(plaintext){
		var encodedText="";
		for (var ii=0;ii<plaintext.length;ii++){
			var encodedCharCode=key.charCodeAt(ii % key.length)-MINCHAR+plaintext.charCodeAt(ii);
			encodedCharCode>MAXCHAR ? encodedCharCode-=ALPHABETLENGTH : {};
			encodedText+=String.fromCharCode(encodedCharCode);
		}
		return encodedText;
	};
	
	function decode(encodedText) {
		var plaintext="";
		for (var ii=0;ii<encodedText.length;ii++){
			var plainCharCode=encodedText.charCodeAt(ii)-(key.charAt(ii % key.length).charCodeAt(0)-MINCHAR);
			plainCharCode<MINCHAR ? plainCharCode+=ALPHABETLENGTH : {};
			plaintext+=String.fromCharCode(plainCharCode);
		}
		return plaintext;
	};

	return {
		key: key,
		encode: encode,
		decode: decode
	};
};

module.exports=Cipher;