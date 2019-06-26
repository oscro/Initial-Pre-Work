// Placing the keyword return inside of a function will cause the function to cease its execution. 

// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0){
      return undefined;
    }
    
    
    // Only change code above this line
  
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  // Change values below to test your code
  abTest(2,2);