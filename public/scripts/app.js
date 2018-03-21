'use strict';

// argument objects - no longer bound with arrow functions

var add = function add(a, b) {
    console.log(arguments);
    return a + b;
};
console.log(add(50, 60, 70));

var addArrow = function addArrow(a, b) {
    // Es6 no longer supports arguments !!!
    // console.log(arguments);
    return a + b;
};
console.log(addArrow(10, 20, 30));

// this keyword - no longer bound

var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // if function is set to object.property it is bound to the object,
    // but if just define an anonymous function within a function that function is not be bound to the object.

    // can not use arrow function for function that maps to property but
    // we can use a ES6 method that will work with this keyword
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};
console.log(user.printPlacesLived());

// Challenge Area
// numbers - array of numbers
// multiplyBy - single number
// multiply - returns a new array where the number have been multiplied

var multiplier = {
    numbers: [10, 20, 30, 40, 50],
    multiplyBy: 4,
    multiply: function multiply(multiplyBy) {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};
console.log(multiplier.multiply());
