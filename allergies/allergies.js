'use strict';

var ALLERGENS = {
	"1": "eggs",
	"2": "peanuts",
	"4": "shellfish",
	"8": "strawberries",
	"16": "tomatoes",
	"32": "chocolate",
	"64": "pollen",
	"128": "cats"
};

module.exports = function(score) {
	this.score=score;
	this.list = () => {
		 return Object.keys(ALLERGENS).reduce((prev, curr) => {
			+curr & score ? prev.push(ALLERGENS[curr]) : prev;
			return prev;
		}, []);
	};

	this.allergicTo = (allergen)  =>  {
		return this.list().indexOf(allergen)>=0;
	};

	return this;
}