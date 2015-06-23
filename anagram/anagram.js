// anagram.js



function toSortedArray(myString){
	var myArray=[];
	for (var letter in myString){
		myArray.push(myString[letter].toUpperCase())
	}
	return myArray.sort();
}

function validate(test, subject){
	return (test.length===subject.length && (test.toUpperCase() !== subject.toUpperCase()));
}

function buildAnagramArray(tests, subject){
	var matchingWords=[];
	var subjectArray=toSortedArray(subject);


	for (var index in tests){
		var test=tests[index];
		if (validate(test, subject)){
			var testArray=toSortedArray(test);
			var finalTest=testArray.join();
			var finalSubject=subjectArray.join();
			if (finalTest===finalSubject){
				matchingWords.push(test);
			}
		}
	}
	return matchingWords;
}



function anagram(subject){
	return {
			matches: function matches (tests){
                	if (arguments.length>1){
                    	tests = Array.prototype.slice.call(arguments);
                	} else {
                    	if (typeof tests === 'string'){
                        	tests =[tests];
                    	}
                	}
					return buildAnagramArray(tests, subject);
			}
	}
};


module.exports=anagram;
