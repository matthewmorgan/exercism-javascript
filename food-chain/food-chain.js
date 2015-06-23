'use strict';

function formatString(s) {
  var args = Array.prototype.slice.call(arguments, 1);
  return s.replace(/{(\d+)}/g, function (match, number) {
    return typeof args[number] !== 'undefined' ? args[number] : match;
  });
}

function getLastLine(endingVerseNumber){
  return (endingVerseNumber===SWALLOWED.length ? SWALLOWED[SWALLOWED.length-1].terminal : SWALLOWED[0].terminal);
}

function startsWithVowel(myString){
  return myString.match("/^[aeiou]/i");
}

function getWhatSheSwallowed(index){
  var what=SWALLOWED[index-1].what;
  return "I know an old lady who swallowed "+(startsWithVowel(what) ? "an " : "a ")+what+".";
}

function getUniqueStatement(index){
  return SWALLOWED[index-1].unique;
}

function getWhatAteWhat(index){
  var swallowed=SWALLOWED[index-1];
  var swallowedPrevious=SWALLOWED[index-2];
  var line=formatString("She swallowed the {0} to catch the {1}", swallowed.what, swallowedPrevious.what);
  line+=(swallowedPrevious.action ? swallowedPrevious.action+"." : ".");
  return line;
}

function isTerminalCreature(index) {
  return SWALLOWED[index-1].terminal;
}

var SWALLOWED = [{
  what: 'fly',
  terminal: 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.'
}, {
  what: 'spider',
  unique: 'It wriggled and jiggled and tickled inside her.',
  action: ' that wriggled and jiggled and tickled inside her',
}, {
  what: 'bird',
  unique: 'How absurd to swallow a bird!'
}, {
  what: 'cat',
  unique: 'Imagine that, to swallow a cat!'
}, {
  what: 'dog',
  unique: 'What a hog, to swallow a dog!'
}, {
  what: 'goat',
  unique: 'Just opened her throat and swallowed a goat!'
}, {
  what: 'cow',
  unique: 'I don\'t know how she swallowed a cow!'
}, {
  what: 'horse',
  terminal: 'She\'s dead, of course!'
}];


function getVerse(verseNumber){
  var lines=[];
  var currentCreatureNumber=verseNumber;
  lines.push(getWhatSheSwallowed(currentCreatureNumber));
  var uniqueStatement=getUniqueStatement(currentCreatureNumber);
  if (uniqueStatement){
    lines.push(uniqueStatement);
  }
  
  while (!isTerminalCreature(currentCreatureNumber)){
    lines.push(getWhatAteWhat(currentCreatureNumber--));
  }
  
  lines.push(getLastLine(verseNumber));
  return lines.join("\n")+"\n";
}
  
function getVerses(startVerse, endVerse){
  var verses=[];
  for (var ii=startVerse;ii<=endVerse;ii++){
    verses.push(getVerse(ii));
  }
  return verses.join("\n")+"\n";
}

module.exports = {
  verse: getVerse,
  verses: getVerses
};
