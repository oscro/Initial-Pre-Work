// ES6 allows for the rest operator for function parameters which allow for a variable number of arguments to be passed into the function. 
// 

const sum = (function () {
    "use strict";
    return function sum(...args) {
        return args.reduce((a, b) => a + b, 0);
    };
})();
console.log(sum(1, 2, 3)); // 6