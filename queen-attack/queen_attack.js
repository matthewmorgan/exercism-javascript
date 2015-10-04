var W = 8,
    H = 8,
    STARTING = { black : [7,3], white: [0,3]};

var QueenAttack = module.exports = function(params){
  var self = this instanceof QueenAttack ? this : Object.create(QueenAttack.prototype);
  if (params && params.white===params.black){
    throw new Error("Queens cannot share the same space");
  }
  if (params){
    self.black=params.black;
    self.white=params.white;
  } else {
    self.black=STARTING.black;
    self.white=STARTING.white;
  }

  var row = buildRow("_ ", W).join('');
  row = row.substring(0, row.length-1)+"\n";
  self.board = concatRows(row, H);

  self.board[self.black[0]*W*2+self.black[1]*2]='B';
  self.board[self.white[0]*W*2+self.white[1]*2]='W';
};

QueenAttack.prototype.toString = function(){
  return this.board.join('');
};

QueenAttack.prototype.canAttack = function(){
  if (this.black[0] === this.white[0] || this.black[1] === this.white[1]){
    return true;
  }
  return Math.abs(this.black[0]-this.white[0])===Math.abs(this.black[1]-this.white[1]);
};

function buildRow(cell, colCount){
  return Array.apply(null, Array(colCount)).map(function(){ return cell});
};

function concatRows(row, rowCount){
  return Array.prototype.concat.apply(buildRow(row, rowCount)).join('').split('');
};

