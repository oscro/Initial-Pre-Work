// The logical or operator will evaluate to true if any of the operands on the right or left return true. 

function testLogicalOr(val) {
    // Only change code below this line
  
    if (val<10 || val>20) {
      return "Outside";
    }
  
    // Only change code above this line
    return "Inside";
  }
  
  // Change this value to test
  testLogicalOr(15);