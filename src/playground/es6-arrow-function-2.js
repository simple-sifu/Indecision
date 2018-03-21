// argument objects - no longer bound with arrow functions

const add = function (a, b){
    console.log(arguments);
    return a + b;
}
console.log(add(50, 60, 70))


const addArrow =  (a, b) => {
    // Es6 no longer supports arguments !!!
    // console.log(arguments);
    return a + b;
}
console.log(addArrow(10, 20, 30))


// this keyword - no longer bound

const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    // if function is set to object.property it is bound to the object,
    // but if just define an anonymous function within a function that function is not be bound to the object.

    // can not use arrow function for function that maps to property but
    // we can use a ES6 method that will work with this keyword
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city );
    }
};
console.log(user.printPlacesLived());

// Challenge Area
// numbers - array of numbers
// multiplyBy - single number
// multiply - returns a new array where the number have been multiplied

const multiplier = {
    numbers: [ 10, 20, 30, 40, 50],
    multiplyBy: 4,
    multiply(multiplyBy){
        return this.numbers.map((number) => number * this.multiplyBy );
    }

}
console.log(multiplier.multiply())