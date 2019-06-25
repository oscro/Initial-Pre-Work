// Else if statements are used to chain together if statements. The lower level if statements will execute once the above stated if statements return false.  

function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    } else if (val < 5) {
      return "Smaller than 5";
    } else {
      return "Between 5 and 10";
    }
  }
  
  // Change this value to test
  testElseIf(7);
  