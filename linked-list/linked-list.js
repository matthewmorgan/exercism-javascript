function Element(value){
	return {value: value, next: null, prev: null}
}

var Deque = function(){
	this.size=0;
	this.head = null;
	this.tail = null;
};

Deque.prototype.pop = function(){
	if (!this.head){
		return undefined;
	};
	var result = this.head.value;
	this.head = this.head.prev;
	return result;
};

Deque.prototype.push = function(value){
	if (this.head){
		var newHead=new Element(value);
		newHead.prev=this.head;
		this.head.next=newHead;
		this.head=newHead;
	} else {
		this.head=new Element(value);
		this.tail=this.head;
	}
};

Deque.prototype.shift = function(){
	this.tail.next ? this.tail.next.prev=null : {};
	var value=this.tail.value;
	this.tail=this.tail.next;
	return value;
};

Deque.prototype.unshift = function(value){
	if (this.tail){
		var newTail=new Element(value);
		newTail.next=this.tail;
		this.tail.prev=newTail;
		this.tail=newTail;
	} else {
		this.tail=new Element(value);
		this.head=this.tail;
	}
};

Deque.prototype.count = function(){
	var count=0;
	var element=this.head;
	while (this.head && element){
		count++;
		element=element.prev;
	}
	return count;
};

Deque.prototype.delete = function(value) {
	var element=this.head;
	while (element){
		if (element.value===value){
			element.next ? element.next.prev=element.prev : {};
			element.prev ? element.prev.next=element.next : {};
			element=null;
		} else {
			element=element.prev;
		}
	}
};

module.exports = Deque;