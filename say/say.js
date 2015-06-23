var ONES = ['','one','two','three','four','five','six'
  ,'seven','eight','nine','ten','eleven','twelve'
  ,'thirteen','fourteen','fifteen','sixteen','seventeen'
  ,'eighteen','nineteen'];
var TENS = ['','','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
var PLACENAMES = ['','thousand','million','billion'];

function splitByPowers(num){
  var m=Math.pow(10, num.toString().length);
  return (num.toString().split('').map(function(el){
    return (+el)*(m/=10);
  })).reverse();
}

var Say = function(){};

Say.prototype.slices=function(){
  var digits=this.digits.split('');
  var result=[digits.splice(0,(digits.length%3)).join('')];
  while (digits.length>0){
    result.push(digits.splice(0,3).join(''));
  }
  return result;
};

Say.prototype.parse = function(){
  var placeNameIndex=0;
  var english=[];
  this.slices().reverse().forEach(function(thousand){
    var thousand=this.parseThousand(thousand).join(' ')+' ';
    if (thousand.trim().length>0){
      english.push((thousand+=PLACENAMES[placeNameIndex]).trim());
    }
    placeNameIndex++;
  }.bind(this));
  return english.reverse().join(' ');
};

Say.prototype.parseThousand = function(num){
  var powers=splitByPowers(num);
  var segments=[];
  if (powers[1]===10){
    var index=10+powers[0];
    segments.push(ONES[index]);
  } else {
    segments.push(ONES[powers[0]]);
    segments.push(TENS[powers[1]/10]);
  }
  if (segments[1] && segments[0]){
    var hyphenated=segments.splice(0,2).reverse().join('-');
    segments.unshift(hyphenated);
  }
  powers[2] ? segments.push(ONES[powers[2]/100]+' hundred') : {};
  return segments.reverse();
};

Say.prototype.inEnglish = function(num){
  if (!num) return 'zero';
  if (num<0 || num > 999999999999) throw new Error('Number must be between 0 and 999,999,999,999.');
  this.digits=num.toString();
  this.english=this.parse();
  return this.english;
};

module.exports=new Say();