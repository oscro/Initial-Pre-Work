// The greater than operator (>) will compare two numbers and return true if the number on the left is greater than the number on the right.

function testGreaterThan(val) {
    if (val>100) {  // Change this line
      return "Over 100";
    }
    
    if (val>10) {  // Change this line
      return "Over 10";
    }
  
    return "10 or Under";
  }
  
  // Change this value to test
  testGreaterThan(10);