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
    printPlacesLived: function(){
        console.log(this.name);
        console.log(this.cities);
        const that = this
        this.cities.forEach(function (city){
            console.log(that.name, ' has lived in ', city)
        });

    }
};
user.printPlacesLived();