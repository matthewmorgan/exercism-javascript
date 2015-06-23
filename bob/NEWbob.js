//newbob.js

        //
// This is only a SKELETON file for the "Bob" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Bob = function() {};

Bob.prototype.hey = function(input) {

  if (input.indexOf('?') > -1) {
    return 'Sure.';
  } else if(input.indexOf('!') > -1){
    return 'Whoa, chill out!';
  } else if(input.trim() === '') {
    return 'Fine. Be that way!';
  } else {
    return 'Whatever.';
  }

};

module.exports = Bob;
      