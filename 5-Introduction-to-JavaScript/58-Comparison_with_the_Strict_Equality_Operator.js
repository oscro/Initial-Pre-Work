// The strict equality operator will compare the value and data type without any type conversion. If they are of different data types then the statement will evaluate to false. 

// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
  // Change this value to test
  testStrict(7);