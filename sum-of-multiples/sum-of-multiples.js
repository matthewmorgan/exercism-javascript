var Sum = module.exports = function (factors){
  var self = this instanceof Sum ? this : Object.create(Sum.prototype);
  self.factors = factors || [3,5];
  return self;
};

Sum.prototype.to = function(limit){
  var multiples=Object.create(null);
  this.factors.forEach(function(factor){
    for (var ii=factor;ii<limit; ii+=factor){
      multiples[ii]=ii;
    }
  });

  return Object.keys(multiples).reduce(function(prev, curr){
    return prev+=multiples[curr];
  },0);
};
