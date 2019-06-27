// const has a couple of nuance characteristics such as being mutable and the ability to push of new data points into an array or object. 
// It will not allow the reassignment of the array identifier but will allow the addition of new elements in the array as shown below.

const s = [5, 7, 2];
function editInPlace() {
    "use strict";
    // change code below this line
    s[0] = 2;
    s[1] = 5;
    s[2] = 7;
    // s = [2, 5, 7]; <- this is invalid

    // change code above this line
}
editInPlace();