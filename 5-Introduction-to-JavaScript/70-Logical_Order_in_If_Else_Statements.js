// The order in which the statements are evaluated is important as a value can be returned earlier than anticipated. 
// In the case below, if val < 10 was evaluated before val < 5 then we would not know if it was less than 5 because of the chain of if else statements. 

function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
  }
  
  // Change this value to test
  orderMyLogic(7);