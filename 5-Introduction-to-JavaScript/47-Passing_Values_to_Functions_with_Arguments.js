// Parameters are the variable placeholders for data that will be used within the function execution.
// When the function is invoked, arguments are passed into it to use within its execution. 
// In the example below, line 12 contains a and b which are the parameters defined.
// Line 17 contains the two numbers as arguments passed to the function.

// Example
function ourFunctionWithArgs(a, b) {
    console.log(a - b);
  }
  ourFunctionWithArgs(10, 5); // Outputs 5
  
  // Only change code below this line.
  function functionWithArgs(a, b){
    console.log(a + b);
  }
  
  functionWithArgs(10, 10);