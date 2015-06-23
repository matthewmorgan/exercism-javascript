var plainKey='abcdefghijklmnopqrstuvwxyz1234567890';
var codeKey='zyxwvutsrqponmlkjihgfedcba1234567890';
var Atbash = function (){};

function getArrayOfAlphanumericChars(myString){
	myString=myString.split(' ').join('').toLowerCase();
	myString=myString.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,"");
	myString=myString.replace(/\s{2,}/g," ");
	return myString.split('');
};

Atbash.encode = function(plain){
	return getArrayOfAlphanumericChars(plain).reduce(function(prev, curr){
		var encodedChar=codeKey[plainKey.indexOf(curr)];
		prev+=(prev.length % 6 === 0 ? " " : "");
		prev+=encodedChar;
		return prev;
	},"").trim();
};

module.exports = Atbash;