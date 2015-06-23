var NUM = [
  " _ \n" +
  "| |\n" +
  "|_|\n" +
  "   ",
  "   \n" +
  "  |\n" +
  "  |\n" +
  "   ",
  " _ \n" +
  " _|\n" +
  "|_ \n" +
  "   ",
  " _ \n" +
  " _|\n" +
  " _|\n" +
  "   ",
  "   \n" +
  "|_|\n" +
  "  |\n" +
  "   ",
  " _ \n" +
  "|_ \n" +
  " _|\n" +
  "   ",
  " _ \n" +
  "|_ \n" +
  "|_|\n" +
  "   ",
  " _ \n" +
  "  |\n" +
  "  |\n" +
  "   ",
  " _ \n" +
  "|_|\n" +
  "|_|\n" +
  "   ",
  " _ \n" +
  "|_|\n" +
  " _|\n" +
  "   "
];

var W = 3, H = 4;
var re = /[|_ ]+/g;

var Ocr = function () {
  this.parseDefinitions();
  return this;
};

Ocr.prototype.parseDefinitions = function () {
  var self = this;
  self.cells = [];
  NUM.forEach(function (num) {
    self.cells.push(num.split(/\n/).join(''));
  });
  return self;
};


Ocr.prototype.convert = function (str) {
  var rows = str.match(re);
  if (rows[0].length > W) return this.parseMultipleDigits(rows);
  return this.convertOne(rows);
};

Ocr.prototype.convertOne = function (rows) {
  var i = this.cells.indexOf(rows.join(''));
  return i >= 0 ? i.toString() : '?';
};

Ocr.prototype.parseMultipleDigits = function (rows) {
  var self = this;
  //parse rows into character grid
  var charRows=rows.length/H;
  var characters = {};
  for (var cc = 0; cc < charRows; cc++) {
    for (var rr = cc * H; rr < (cc + 1) * H; rr++) {
      var row = rows[rr];
      for (var w = 0; w < row.length; w += W) {
        var charRow=w/W;
        !characters[cc, charRow] ? characters[cc, charRow] = [] : {};
        characters[cc, charRow].push(row.slice(w, W + w));
      }
    }
  }
  if (charRows===1) {
    return self.convertRowOfDigits(characters);
  } else {
    var transposed=self.transposeGrid(characters, charRows);
    return Object.keys(transposed).reduce(function (prev, curr, ii) {
      prev += transposed[curr].join('');
      ii < charRows - 1 ? prev += ',' : {};
      return prev;
    }, '');
  }
};

Ocr.prototype.convertChunkOfDigits = function(chunk){
  var self=this;
  //take first W characters of each row, convert, append to result, return result
  var rows=[];
  var rowIndex=0;
  while (chunk[0].length>0){
    for (var layer=0;layer<H;layer++){

    }
  }

};

Ocr.prototype.transposeGrid = function(characters, charRows){
  var result = {};
  for (var col = 0; col < charRows; col++) {
    var column = characters[col];
    for (var layer = 0; layer < column.length; layer += H) {
      !result[layer / H] ? result[layer / H] = [] : {};
      result[layer / H][col] = this.convertOne(column.slice(layer, layer + H));
    }
  }
  return result;
};
module.exports = new Ocr();
