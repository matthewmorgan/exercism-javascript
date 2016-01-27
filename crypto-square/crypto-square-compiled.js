//'use strict'
//
//
//var Crypto = function(phrase){
//	var squareSize=0;
//
//	function getSegments(str){
//		var result=[];
//		var source=str.split('');
//		while (source.length>0){
//			result.push(source.splice(0,squareSize).join(''));
//		}
//		return result;
//	};
//
//	function getCipherText(square){
//		var cipherText="";
//		for (var ii=0;ii<squareSize;ii++){
//			for (var jj=0;jj<square.length;jj++){
//				cipherText+=square[jj][ii] || "";
//			}
//		}
//		return cipherText;
//	};
//
//	function normalizePlaintext(str){
//		return str.toLowerCase().replace(/[^\w]/g,'');
//	};
//
//	function getSquareSize(str){
//		return Math.ceil(Math.sqrt(str.length));
//	};
//
//	return {
//		normalizePlaintext: function() {
//			return normalizePlaintext(phrase);
//		},
//		size: function (){
//			return getSquareSize(normalizePlaintext(phrase));
//		},
//		plaintextSegments: function(){
//			var normalized=normalizePlaintext(phrase);
//			squareSize=this.size(normalized);
//			return getSegments(normalized);
//		},
//		ciphertext: function(){
//			return getCipherText(this.plaintextSegments());
//		},
//		normalizeCiphertext: function(){
//			return getSegments(this.ciphertext()).join(' ');
//		}
//	};
//};
//
//module.exports = Crypto;

'use strict';

module.exports = function Crypto(str) {
	var length = 0,
	    encoded = '',
	    normalized = '',
	    normalizedSegments = [];

	// is underscore puncuation? I'm gonna say no
	normalized = str.toLowerCase().replace(/\W/g, '');

	// get next perfect square
	length = Math.ceil(Math.sqrt(normalized.length));

	normalizedSegments = normalized.match(new RegExp('.{1,' + length + '}', 'g'));
	for (var i = 0; i < length; i++) {
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			for (var _iterator = normalizedSegments[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				var segment = _step.value;
				encoded += segment[i] || '';
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator['return']) {
					_iterator['return']();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}
	}

	return {
		ciphertext: function ciphertext() {
			return encoded;
		},
		normalizePlaintext: function normalizePlaintext() {
			return normalized;
		},
		plaintextSegments: function plaintextSegments() {
			return normalizedSegments;
		},
		size: function size() {
			return length;
		}
	};
};

//# sourceMappingURL=crypto-square-compiled.js.map