var QueenAttack = module.exports = function(params){
  var self = this instanceof QueenAttack ? this : Object.create(QueenAttack.prototype);
  if (params && params.white===params.black){
    throw new Error("Queens cannot share the same space");
  }
  if (params){
    self.black=params.black;
    self.white=params.white;
  } else {
    self.black=[7,3];
    self.white=[0,3];
  }
  self.board = ("_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n"+
    "_ _ _ _ _ _ _ _\n").split('');

  self.board[self.black[0]*16+self.black[1]*2]='B';
  self.board[self.white[0]*16+self.white[1]*2]='W';
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

