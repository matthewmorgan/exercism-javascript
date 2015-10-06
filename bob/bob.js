function isSilent(input) {
  return (input.trim().length < 1);
};

function isShouting(input) {
  return (input.toUpperCase() === input) && (/[A-Z]+/).test(input);
};

function isQuestion(input) {
  return input.charAt(input.length - 1) === '?';
};

var responses = {
  4: 'Fine. Be that way!',
  2: 'Whoa, chill out!',
  1: 'Sure.',
  0: 'Whatever.'
}

var Bob = module.exports =  function() {
  return {
    hey:  (input) => {
       return responses[
          Math.max(
            isSilent(input) << 2,
            isShouting(input) << 1,
            isQuestion(input) << 0
          )
        ];
    }
  }
};
