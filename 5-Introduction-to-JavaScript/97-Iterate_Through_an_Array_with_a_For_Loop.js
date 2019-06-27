// We used the .length method of myArr in the condition to iterate through the for loop below. 
// This allowed us to iterate through each element in the array to store its total value in the variable total. 

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line
var total = 0; 

for (var i = 0; i < myArr.length; i++){
  total += myArr[i];
  console.log(total);
}
