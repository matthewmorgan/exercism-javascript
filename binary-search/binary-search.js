function isSorted(arr){
  return arr.every(function(el, ii){
    return ii === 0 || el >= arr[ii-1];
  })
}
var Search = module.exports = function(data){
  isSorted(data) ? this.array=data : {};
};

Search.prototype.indexOf = function(search, lower, upper){
  upper = upper || this.array.length-1;
  lower = lower || 0;
  var cursor = lower + Math.ceil((upper-lower)/2);
  var el = this.array[cursor];
  if (el === search) return cursor;
  else if (upper === lower && el !== search) return -1;

  el > search ? upper = cursor : lower = cursor;
  return this.indexOf(search, lower, upper);
};