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

module.exports = function (score) {
	var _this = this;

	this.score = score;
	this.list = function () {
		return Object.keys(ALLERGENS).reduce(function (prev, curr) {
			+curr & score ? prev.push(ALLERGENS[curr]) : prev;
			return prev;
		}, []);
	};

	this.allergicTo = function (allergen) {
		return _this.list().indexOf(allergen) >= 0;
	};

	return this;
};

//# sourceMappingURL=allergies-compiled.js.map