// Variables declared with var, let, and const
var myVar = "This is a var variable"; // var variable
let myLet = 42; // let variable
const myConst = [1, 2, 3]; // const variable

// Named function
function namedFunction() {
    console.log("This is a named function.");
}
namedFunction();

// Anonymous function assigned to a variable
let anonymousFunction = function() {
    console.log("This is an anonymous function.");
};
anonymousFunction();

// Built-in function (example: parseInt)
let numberString = "123";
let parsedNumber = parseInt(numberString);
console.log("Parsed number using parseInt:", parsedNumber);

// If/else conditional statement
let condition = true;
if (condition) {
    console.log("Condition is true.");
} else {
    console.log("Condition is false.");
}

// Switch conditional statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    default:
        console.log("Weekend");
}

// Arrays of different data types
let stringArray = ["apple", "banana", "cherry"]; // array of strings
let numberArray = [1, 2, 3, 4, 5]; // array of numbers
let mixedArray = ["text", 42, true]; // array of mixed data types

// Loop through an array
for (let i = 0; i < stringArray.length; i++) {
    console.log("String array element:", stringArray[i]);
}

// Creating and using objects
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Accessing object properties
console.log("Person's first name:", person.firstName); // Access firstName property
console.log("Person's full name:", person.fullName()); // Call fullName method
