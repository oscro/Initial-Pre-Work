// Arrow functions work well with higher order functions such as filter(), map(), and reduce().
// Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// Source: https://eloquentjavascript.net/05_higher_order.html

const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
const squareList = (arr) => {
    "use strict";
    // change code below this line
    const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
    // change code above this line
    return squaredIntegers;
};
// test your code
const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);