// Arrow functions are an addition to ES6 that allows for several changes to how we declare functions is JS.
// When there is no function body, and only a return value, arrow function syntax allows you to omit the keyword return as well as the brackets surrounding the code.
// Source: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-arrow-functions-to-write-concise-anonymous-functions

const magic = () => {
    "use strict";
    return new Date();
};

console.log(magic());