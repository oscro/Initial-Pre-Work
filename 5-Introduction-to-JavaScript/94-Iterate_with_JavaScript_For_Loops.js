// For loops are another way of iterating through a block of code until a condition returns false. 
// In the case of a for loop, the variable is initialized on the left - the condition is in the middle - and the final expression is on the right which is used to increment or decrement your variable.
// It is a clean way of writing a loop because the variable, condition, and final expression are all on the same line making it easier to read.

// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; myArray.length < 5; i++){
  myArray.push(i);
  console.log(myArray);
}