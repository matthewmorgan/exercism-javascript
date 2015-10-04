//module.exports = function(input){
//
//	//strip non-numerics
//	input=input.split(/\D/).join("");
//	var phone="0000000000";
//
//	if (input.length===11 && input.substring(0,1)==="1"){
//		phone=input.substring(1,11);
//	} else if (input.length===10){
//		phone=input;
//	}
//
//	return {
//		number: function(){
//			return phone
//		},
//		toString: function(){
//			var formatted="("
//				+phone.substring(0,3)
//				+") "+phone.substring(3,6)
//				+"-"+phone.substring(6,10);
//			return formatted
//		},
//		areaCode: function(){
//			return phone.substring(0,3)
//		}
//	}
//};

var PhoneNumber = function(phoneNumber) {
	area = phoneNumber.substring(0, 3),
			exchange = phoneNumber.substring(3, 6),
			suffix = phoneNumber.substring(6, 10),

			this.number = function() {
				var cleanNumber = clearChars()
				if ((checkLength(cleanNumber) && checkFirstDigit(cleanNumber)) || (cleanNumber.length < 10)) return '0000000000';
				if (checkLength(cleanNumber)) return cleanNumber.slice(1);
				return cleanNumber;
			},

			this.areaCode = function() {
				return area;
			},

			this.toString = function() {
				return '(' + area +') '+ exchange + '-' + suffix;
			},

			clearChars = function() {
				return phoneNumber.replace(/\D/g, '')
			},

			checkLength = function(number){
				return number.length !== 10;
			},

			checkFirstDigit = function(number){
				return number[0] != 1;
			};
};

module.exports = PhoneNumber;