module.exports = function(input){

	//strip non-numerics
	input=input.split(/\D/).join("");
	var phone="0000000000";

	if (input.length===11 && input.substring(0,1)==="1"){
		phone=input.substring(1,11);	
	} else if (input.length===10){
		phone=input;
	}

	return {
		number: function(){
			return phone
		},
		toString: function(){
			var formatted="("
				+phone.substring(0,3)
				+") "+phone.substring(3,6)
				+"-"+phone.substring(6,10);
			return formatted
		},
		areaCode: function(){
			return phone.substring(0,3)
		}
	}
};