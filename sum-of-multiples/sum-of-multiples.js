'use strict';

let Sum = module.exports = function (factors){
  let self = this instanceof Sum ? this : Object.create(Sum.prototype);
  self.factors = factors || [3,5];
  return self;
};

Sum.prototype.to = function(limit) {
  let multiples=Object.create(null);
  this.factors.forEach((factor) => {
    for (var ii=factor;ii<limit; ii+=factor){
      multiples[ii]=ii;
    }
  });

  return Object.keys(multiples).reduce((prev, curr) => prev+=multiples[curr],0);
};

