var ACTIONS = ['wink','double blink','close your eyes','jump'];

module.exports = function(shake){
	if (typeof shake !== 'number') throw (new Error("Handshake must be a number"));
	return {
		commands: function(){
			var actions=ACTIONS.reduce(function(prev, curr, ii){
				shake & Math.pow(2,ii) ? prev.push(curr) : {};
				return prev;
			},[]);
			shake & 16 ? actions.reverse() : {};
			return actions;
		}
	};
};

