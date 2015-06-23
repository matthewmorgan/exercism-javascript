var NUM = [ ' _ | ||_|   ',
            '     |  |   ',
            ' _  _||_    ',
            ' _  _| _|   ',
            '   |_|  |   ',
            ' _ |_  _|   ',
            ' _ |_ |_|   ',
            ' _   |  |   ',
            ' _ |_||_|   ',
            ' _ |_| _|   ' ]
    ,W = 3, H = 4;

exports.convert = function(str) {
  var rows = str.match(/[|_ ]+/g);
  var chars='';
  while(rows.length>0){
    var charLine=rows.splice(0,H);
    var charIndex=0;
    while(charIndex<charLine[0].length/W){
      var char='';
      for (var layer=0;layer<H;layer++){
        char+=charLine[layer].substr(charIndex*W,W);
      }
      charIndex++;
      chars+=NUM.indexOf(char) >= 0 ? NUM.indexOf(char).toString() : '?';
    }
    rows.length>0 ? chars+=',' : {};
  }
  return chars;
};