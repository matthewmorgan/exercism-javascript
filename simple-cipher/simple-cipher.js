var alpha = "abcdefghijklmnopqrstuvwxyz";

function generateKey(){
	return Array.apply(null, Array(100)).map(function(){
		return alpha.charAt(Math.floor(Math.random() * alpha.length));
	}).join('');
}

function xCode(key, inText, sign){
	console.log(key);
	return inText.split('').reduce(function(outText, letter, ii){
		var offset = sign * alpha.indexOf(key.charAt(mod(ii, key.length)));
		outText += alpha.charAt(mod(alpha.indexOf(letter)+offset ,alpha.length));
		return outText;
	}, "");
}

function mod(n, m) {
	return ((n % m) + m) % m;
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