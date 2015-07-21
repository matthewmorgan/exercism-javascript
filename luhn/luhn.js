var Luhn = module.exports = function (accountNumber) {
  this.number = accountNumber;
  this.digits = String(accountNumber).split('').reverse();
  this.checkDigit = this.getCheckDigit();
  this.checksum = this.getChecksum();
  this.addends = this.getAddends();
  this.valid = this.isValid();
};

Luhn.prototype.getAddends = function() {
  return this.digits.reduce(function (prev, curr, ii) {
    ii % 2 !== 0 ? prev.push(+curr * 2 > 9 ? +curr * 2 - 9 : +curr * 2)
        : prev.push(+curr);
    return prev;
  }, []).reverse();
};

Luhn.prototype.getCheckDigit = function() {
  return +this.digits[0];
};

Luhn.prototype.isValid = function() {
  return this.getChecksum() % 10 === 0;
};

Luhn.prototype.getChecksum = function() {
  return this.getAddends().reduce(function (prev, curr) {
    return prev += (+curr);
  }, 0);
};

Luhn.create = function (accountNumber, checkDigit) {
  var digit=checkDigit || 0;
  var luhn = new Luhn(accountNumber + String(digit));
  return luhn.valid ? +luhn.number : Luhn.create(accountNumber, digit + 1);
};