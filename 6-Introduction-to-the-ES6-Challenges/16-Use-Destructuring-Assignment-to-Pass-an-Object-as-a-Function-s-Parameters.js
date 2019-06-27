// Object destructuring can be done in a function argument as shown on line 15.
// This has the added benefit of not having to manipulate an entire object in a function; only the fields that are needed are copied inside the function.
// Source: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-destructuring-assignment-to-pass-an-object-as-a-functions-parameters

const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = (function () {
    "use strict"; // do not change this line

    // change code below this line
    return ({ max, min }) => {
        // use function argument destructuring
        return (max + min) / 2.0;
    };
    // change code above this line

})();
console.log(stats); // should be object
console.log(half(stats)); // should be 28.015