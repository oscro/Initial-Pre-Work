// ES6 allows for the creation of object by simply passing the properties in as arguments and declaring them in the body of the function. 
// { x : x, y : y, z : z } would not be necessary in this case. 

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
    return (name, age, gender) => ({ name, age, gender });
    // change code above this line
};
console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object