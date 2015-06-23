var BRACKETS=['{','[','(', '}',']',')'];

var Brackets = module.exports = function(str){
  var match;
  str=str.split('');
  while (str.length>0){
    match = str.join('').match(/[\]\}\)]/);
    if (!match) return false;
    var pair=str.splice(match.index-1, 2);
    if (BRACKETS.indexOf(pair[0])!== BRACKETS.indexOf(pair[1])-3) return false;
  }
  return true;
};