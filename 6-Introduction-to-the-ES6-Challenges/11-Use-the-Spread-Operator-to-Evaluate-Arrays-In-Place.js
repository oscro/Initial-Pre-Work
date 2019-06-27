// The spread operator allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
// Source: https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/es6/use-the-spread-operator-to-evaluate-arrays-in-place

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function () {
    "use strict";
    arr2 = [...arr1]; // change this line
})();
console.log(arr2);