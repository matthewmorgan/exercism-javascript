var Matrix = module.exports = function (data) {
  var self = this instanceof Matrix ? this : Object.create(Matrix.prototype);
  self.parseInput(data).findMinMax().findSaddlePoints();
  return self;
};

Matrix.prototype.parseInput = function(data){
  var self=this;
  self.rows = [];
  self.columns = [];
  data.split(/\n/).map(function (row, ii) {
    self.rows.push(row.trim().split(/\s/).map(function (cell, jj) {
      self.columns[jj] ? self.columns[jj].push(+cell) : self.columns[jj]=[+cell];
      return +cell;
    }));
  });
  return self;
};

Matrix.prototype.findMinMax = function(){
  var self=this;
  self.rowMaxs = self.rows.map(function(row){return Math.max.apply(null,row)});
  self.colMins = self.columns.map(function(col){return Math.min.apply(null, col)});
  return self;
};

Matrix.prototype.findSaddlePoints = function(){
  var self=this;
  self.saddlePoints=[];
   return self.rows.forEach(function(row, rowIndex){
    row.forEach(function(cell, colIndex){
      if (cell===self.rowMaxs[rowIndex] && cell===self.colMins[colIndex]){
        self.saddlePoints.push([rowIndex, colIndex]);
      }
    });
  });
};
