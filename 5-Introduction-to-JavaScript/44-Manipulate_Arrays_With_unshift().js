// .unshift() behaves in a similar manner to .push() in adding an entry to an array. Instead of appending data to an array it prepends the data to the beginning of the array. 

// Example
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy"); 
// ourArray now equals ["Happy", "J", "cat"]

// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line.
myArray.unshift(["Paul", 35]);