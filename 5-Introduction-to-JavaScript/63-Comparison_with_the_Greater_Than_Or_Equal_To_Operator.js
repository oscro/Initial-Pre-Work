// The greater than or equal to operator (>=) will evaluate to true if the number on the left is greater than or equal to the number on the right. 

function testGreaterOrEqual(val) {
    if (val>=20) {  // Change this line
      return "20 or Over";
    }
    
    if (val>=10) {  // Change this line
      return "10 or Over";
    }
  
    return "Less than 10";
  }
  
  // Change this value to test
  testGreaterOrEqual(10);