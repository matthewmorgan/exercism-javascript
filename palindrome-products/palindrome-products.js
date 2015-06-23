var Palindrome = function(params){
  this.maxFactor=params.maxFactor;
  this.minFactor=params.minFactor || 1;
  this.maxProduct=1;
  this.minProduct=Infinity;
  this.data=[];
};

Palindrome.prototype.generate = function(){
  for (var ii=this.minFactor;ii<this.maxFactor;ii++){
    for (var jj=ii;jj<=this.maxFactor;jj++){
      var product=ii*jj;
      if (product.toString().split('').reverse().join('')===product.toString()){
        this.data[product]=[ii,jj];
        this.maxProduct = Math.max(this.maxProduct, product);
        this.minProduct = Math.min(this.minProduct, product);
      }
    }
  }
};

Palindrome.prototype.largest = function(){
  this.value=this.maxProduct;
  this.factors=[this.data[this.maxProduct]];
  return this;
};

Palindrome.prototype.smallest = function(){
  this.value=this.minProduct;
  this.factors=[this.data[this.minProduct]];
  return this;
};

module.exports = Palindrome;