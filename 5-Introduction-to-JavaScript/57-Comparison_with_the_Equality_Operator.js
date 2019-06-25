// Comparison operators will evaluate a statement to true or false and return the boolean value. 
// If the values being evaluated are of a different data type then JS will convert the data types to be of the same type in a process called type coercion.

// Setup
function testEqual(val) {
    if (val==12) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testEqual(12);