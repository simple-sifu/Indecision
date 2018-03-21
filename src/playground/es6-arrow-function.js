const square = function(x){
    return x * x;
};


console.log(square(8));

//arrow functions are anonymous named functions with variable.
// const squareArrow = (x) => {
//     return x * x;
// }

//single expression
const squareArrow = (x) => x * x;

console.log(squareArrow(9));

// Challenge - use Arrow Functions
// getFirstName('Mike Smith') -> "Mike"
// Create regular Arrow Function
// Create arrow function using shorthand syntax

const getFirstName = (fullName) => {
    return fullName.split(' ')[0]
}

console.log(getFirstName('Mike Smith'));

const getFirstNameArrow = (fullName) => fullName.split(' ')[0]

console.log(getFirstName('James Monrow Sam'));



