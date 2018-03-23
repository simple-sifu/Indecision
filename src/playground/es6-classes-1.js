
// Setup Constructor to take name and age (default to 0)
// getDescription - Andrew Mead is 26 year(s) old.
class Person {

    constructor(name = 'Anonymous', age = 0){
        this.name = name
        this.age = age
    }
    // using ES6 Template Strings is easier than worrying about spaces and +'s
    getGreeting(){
        return `Hi, I am ${this.name}!`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }

}

let me = new Person('Andrew Mead', 26);
console.log(me.getGreeting());
console.log(me.getDescription());

let other = new Person();
console.log(other.getGreeting());
console.log(other.getDescription());


class Student extends Person {
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if (this.hasMajor()){
            description += ` Their major is ${this.major}`
        }
        return description;
    }
}



me = new Student("Tommy", "53", "Computer Science")
console.log(me.getDescription())

other = new Student()
console.log(other.hasMajor())


// Traveler -> Person
// Add support for homeLocation
// Override getGreeting
// 1. Hi I am Andrew Mead. I'm visiting from Philadelphia
// 2. Hi I am Andrew Mead.

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if (this.homeLocation){
            greeting += ` I'm visiting from ${this.homeLocation}`
        }
        return greeting;
    }
}



me = new Traveler("Tommy", "53", "Philadelphia")
console.log(me.getGreeting())

other = new Traveler()
console.log(other.getGreeting())
