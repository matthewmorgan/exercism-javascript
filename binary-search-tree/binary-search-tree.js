//big thanks to Shin-jay7 for his/her version 
function BinarySearchTree(data) {
  this.data = data;
};

BinarySearchTree.prototype.insert = function(value) {
	value <= this.data ? this.insertLeft(value) : this.insertRight(value);
};

BinarySearchTree.prototype.insertLeft = function(value) {
	this.left ? this.left.insert(value) : this.left=new BinarySearchTree(value);
};

BinarySearchTree.prototype.insertRight = function(value) {
	this.right ? this.right.insert(value) : this.right=new BinarySearchTree(value);
};

BinarySearchTree.prototype.each = function(fn) {
  if (this.left) { this.left.each(fn); }
  fn.call(this, this.data);
  if (this.right) { this.right.each(fn); }
};

module.exports = BinarySearchTree;