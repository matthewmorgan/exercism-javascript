'use strict';

module.exports = function (input) {

  input = input.split(/\D/).join("");
  var phone = "0000000000";

  if (input.length === 11 && input.substring(0, 1) === "1") {
    phone = input.substring(1, 11);
  } else if (input.length === 10) {
    phone = input;
  }

  return {
    number: function number() {
      return phone;
    },
    toString: function toString() {
      return "(" + phone.substring(0, 3) + ") " + phone.substring(3, 6) + "-" + phone.substring(6, 10);
    },
    areaCode: function areaCode() {
      return phone.substring(0, 3);
    }
  };
};

//# sourceMappingURL=phone_number-compiled.js.map