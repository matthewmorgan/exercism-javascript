
        var Crypto = function(phrase){
	var squareSize=0;

	function getSegments(str){
		var result=[];
		var source=str.split('');
		while (source.length>0){
			result.push(source.splice(0,squareSize).join(''));
		}
		return result;
	};

	function getCipherText(square){
		var cipherText="";
		for (var ii=0;ii<squareSize;ii++){
			for (var jj=0;jj<square.length;jj++){
				cipherText+=square[jj][ii] || "";
			}
		}
		return cipherText;
	};

	function normalizePlaintext(str){
		return str.toLowerCase().replace(/[^\w]/g,'');
	};

	function getSquareSize(str){
		return Math.ceil(Math.sqrt(str.length));
	};

	return {
		normalizePlaintext: function() {
			return normalizePlaintext(phrase);
		},
		size: function (){
			return getSquareSize(normalizePlaintext(phrase));
		},
		plaintextSegments: function(){
			var normalized=normalizePlaintext(phrase);
			squareSize=this.size(normalized);
			return getSegments(normalized);
		},
		ciphertext: function(){
			return getCipherText(this.plaintextSegments());
		},
		normalizeCiphertext: function(){
			return getSegments(this.ciphertext()).join(' ');
		}
	};
};

module.exports = Crypto;
      