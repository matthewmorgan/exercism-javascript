var isSilent = function(input){
    return (input.length<1);
}

var isShouting = function(input) {
    var reg=/[a-zA-Z]/;
    return (input.toUpperCase() === input && input.match(reg));
}

var isQuestion = function(input){
    var lastChar='';
    if (input.length>=1){
        lastChar=input.charAt(input.length-1);
    }
    return (lastChar==='?');
}


var Bob = function() {};

Bob.prototype.hey = function(input) {
    input = (typeof input === 'string' ? input.trim() : '');
    
    if(isSilent(input)){
        return 'Fine. Be that way!';
    } 
    if (isShouting(input)){
        return 'Whoa, chill out!';
    }
    if (isQuestion(input)){
        return 'Sure.';
    }
    return 'Whatever.';
 
};

module.exports = Bob;
