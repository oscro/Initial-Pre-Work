// Incrementing in a for loop can be done with any number, it does not have to be an increment of one. 
// We incremented by two and began the variable with a value of one to push odd numbers into myArray.

// Example
var ourArray = [];

for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 1; i <= 9; i+=2 ){
  myArray.push(i);
  console.log(myArray);
}