var CustomSet = function(data){
  this.data=Object.create(null);
  data=data || [];
  data && typeof data[0]==='number' ?
      this.comparator=function (a,b){return a-b;}
      : this.comparator=function (a,b){return b<=a ? 1 : -1;};
  data.forEach(function(el){this.put(el)}.bind(this));
  return this;
};

CustomSet.prototype.delete=function(el){
  delete this.data[el];
  return this;
};

CustomSet.prototype.eql = function(other){
  return this.difference(other).size()===0;
};

CustomSet.prototype.difference = function(other){
  return new CustomSet(Object.keys(this.data).filter(function(el){
    return other.data[el] === undefined;
  }));
};

CustomSet.prototype.disjoint = function(other){
  return this.size!==0 && other.size()!==0
      && this.difference(other).size()===this.size();
};

CustomSet.prototype.intersection = function(other){
  return this.difference(this.difference(other));
};

CustomSet.prototype.union = function(other){
  return new CustomSet(this.toList().concat(this.difference(other).toList()));
};

CustomSet.prototype.subset = function(other){
  return other.eql(this.intersection(other));
};

CustomSet.prototype.toList = function(){
  return Object.keys(this.data).map(function(el){return +el});
};

CustomSet.prototype.member = function(el){
  return this.data[el] !== undefined;
};

CustomSet.prototype.put = function(value){
  this.data[value] = value;
  return this;
};

CustomSet.prototype.sort = function(){
  this.data.sort(this.comparator);
  return this;
};

CustomSet.prototype.size = function(){
  return Object.keys(this.data).length;
}

CustomSet.prototype.empty = function(){
  this.data=Object.create(null);
  return this;
};

module.exports=CustomSet;