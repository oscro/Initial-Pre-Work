// ES6 introduced default parameters that allow for a default value to be placed in the argument when the function is called, if none is provided.

const increment = (function (number) {
    "use strict";
    return function increment(number, value = 1) {
        return number + value;
    };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6