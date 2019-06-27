// Destructuring can be done with array values as well. 
// The difference between the spread operator and array destructuring is that the spread operator unpacks all of the items in the array while destructuring allows you to pick and choose which values you would like assigned to certain variables. 

let a = 8, b = 6;
(() => {
    "use strict";
    // change code below this line
    [b, a] = [a, b]
    // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8