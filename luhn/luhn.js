var Luhn = module.exports = function (accountNumber) {
  this.number = accountNumber;
  this.digits = String(accountNumber).split('').reverse();
  this.checkDigit = getCheckDigit(this.digits);
  this.checksum = getChecksum(this.digits);
  this.addends = getAddends(this.digits);
  this.valid = isValid(this.digits);
};

function getAddends (digits) {
  return digits.reduce(function (prev, curr, ii) {
    ii % 2 !== 0 ? prev.push(+curr * 2 > 9 ? +curr * 2 - 9 : +curr * 2)
        : prev.push(+curr);
    return prev;
  }, []).reverse();
};

function getCheckDigit(digits) {
  return +digits[0];
};

function isValid (digits) {
  return getChecksum(digits) % 10 === 0;
};

function getChecksum (digits) {
  return getAddends(digits).reduce(function (prev, curr) {
    return prev += (+curr);
  }, 0);
};

Luhn.create = function (accountNumber, checkDigit) {
  var digit=checkDigit || 0;
  var luhn = new Luhn(accountNumber + String(digit));
  return luhn.valid ? +luhn.number : Luhn.create(accountNumber, digit + 1);
};