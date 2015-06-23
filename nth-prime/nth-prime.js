var sieve = require('./sieve');  //my Sieve class from earlier

var Prime = function () {};

// see http://en.wikipedia.org/wiki/Prime_number_theorem#Approximations_for_the_nth_prime_number
Prime.prototype.nth = function (n) {
  if (n < 1) throw "Prime is not possible";
  var approximateLimit = n * Math.log(n) + n * Math.log(Math.log(n));
  approximateLimit < 15 ? approximateLimit = 15 : {};
  var nthPrime = sieve(approximateLimit).primes[n - 1];
  return nthPrime;
};

module.exports = new Prime();


