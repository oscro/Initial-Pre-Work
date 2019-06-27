// We counted backwards with the for loop below to show that we could also decrement by any number in the final expression. 

// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -= 2){
  myArray.push(i);
  console.log(myArray);
}