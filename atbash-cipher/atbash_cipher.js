'use strict';

const plainKey = 'abcdefghijklmnopqrstuvwxyz1234567890',
    codeKey = 'zyxwvutsrqponmlkjihgfedcba1234567890';

let getArrayOfAlphanumericChars = (str) => str.toLowerCase().replace(/\W/g, "").split('');

let chunk = (str) => str.match(/.{1,5}/g).join(' ');

module.exports = {
  encode: (plain) => {
    return chunk(
        getArrayOfAlphanumericChars(plain).reduce((encodedString, curr) => {
          let encodedChar = codeKey[plainKey.indexOf(curr)];
          encodedString += encodedChar;
          return encodedString;
        }, "").trim()
    );
  }
};