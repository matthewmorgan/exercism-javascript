        'use strict';

function BinarySearchTree(data) {
  this.data = data;
  this.left = undefined;
  this.right = undefined;
}

BinarySearchTree.prototype.insert = function(value) {
	value <= this.data ? this.insertLeft(value) : this.insertRight(value);
	return this;
};
//  if (value <= this.data) {
//    this.insertLeft(value);
//  } else {
//    this.insertRight(value);
//  }
//  return this;
//};

BinarySearchTree.prototype.insertLeft = function(value) {
	this.left ? this.left.insert(value) : this.left=new BinarySearchTree(value);
	return this;
//  if (!this.left) {
//    this.left = new BinarySearchTree(value);
//  } else {
//    this.left.insert(value);
//  }
//  return this;
};

BinarySearchTree.prototype.insertRight = function(value) {
	this.right ? this.right.insert(value) : this.right=new BinarySearchTree(value);
	return this;
//  if (!this.right) {
//    this.right = new BinarySearchTree(value);
//  } else {
//    this.right.insert(value);
//  }
//  return this;
};

BinarySearchTree.prototype.each = function(fn) {
  if (this.left) { this.left.each(fn); }
  fn.call(this, this.data);
  if (this.right) { this.right.each(fn); }
};

module.exports = BinarySearchTree;