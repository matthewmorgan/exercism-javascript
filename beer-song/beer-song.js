var verses=["No more bottles of beer on the wall, no more bottles of beer." +
					"\nGo to the store and buy some more, 99 bottles of beer on the wall.\n",
					"1 bottle of beer on the wall, 1 bottle of beer." +
					"\nTake it down and pass it around, no more bottles of beer on the wall.\n",
					"XXX bottles of beer on the wall, XXX bottles of beer." +
					"\nTake one down and pass it around, YYY bottles of beer on the wall.\n"
		];
var regXXX = new RegExp('XXX', 'g');
var regYYY = new RegExp('YYY bottles', 'g');

exports.verse=function (verseNumber){
	var which=Math.min(2,verseNumber);
	var bottles=verseNumber > 2 ? 'bottles' : 'bottle';
	return verses[which].replace(regXXX,verseNumber)
			.replace(regYYY, (verseNumber-1)+' '+bottles);
};

exports.sing=function (currentVerse, finish){
	finish = finish | 0;
	var verses="";
	while (currentVerse>=finish){
		verses+=exports.verse(currentVerse);
		verses += currentVerse>finish ? '\n' : '';
		currentVerse--;
	}
	return verses;
};

