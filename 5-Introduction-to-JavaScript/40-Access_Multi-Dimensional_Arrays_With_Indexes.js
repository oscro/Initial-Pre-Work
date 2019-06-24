// Data within multi-dimensional arrays are accessed via bracket notation as well but in a different manner.
// The first bracket references the outer most array while the following bracket(s) reference the next level of entries inside.

// Setup
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

// Only change code below this line.
var myData = myArray[2][1];