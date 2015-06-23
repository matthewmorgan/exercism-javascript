var BufferEmptyException =  function() {
	return {
		name: "buffer empty exception!",
		message: "can't read from an empty buffer!"
	};
};

var BufferFullException = function(){
	return {
		name: "buffer full exception!",
		message: "can't write to a full buffer!"
	};
};

function read(){
	if (buffer.length===0){
		throw (BufferEmptyException());
	}
	return buffer.splice(0,1)[0];
}

function write(value){
	if (buffer.length===bufferMax){
		throw (BufferFullException())
	}
	value ? buffer.push(value) : null;
}

function forceWrite(value){
	read();
	write(value);
}

function clear(){
	buffer=new Array();
}

var CircularBuffer = function(bufferMax){
	this.buffer=new Array();
	this.bufferMax=bufferMax;
	return {
		read: read,
		write: write,
		forceWrite: forceWrite,
		clear: clear
	};	
};

exports.circularBuffer = CircularBuffer;

exports.bufferEmptyException = BufferEmptyException;

exports.bufferFullException = BufferFullException;
      