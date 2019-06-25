// If multiple conditions need to be tested then if else statements can be chained together for complex logic.

function testSize(num) {
    // Only change code below this line
    if (num < 5) {
      return "Tiny";
    } else if (num < 10) {
      return "Small";
    } else if (num < 15) {
      return "Medium";
    } else if (num < 20) {
      return "Large";
    } else if (num >= 20) {
      return "Huge";
    } else {
      return "Please place a number as the argument.";
    }
    // Only change code above this line
  }
  
  // Change this value to test
  testSize(7);