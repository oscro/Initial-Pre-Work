// Variables can also be locally scoped or function scope in which they are only accesible inside of the function they were created. 

function myLocalScope() {
    'use strict'; // you shouldn't need to edit this line
    var myVar;
    console.log(myVar);
  }
  myLocalScope();
  
  // Run and check the console
  // myVar is not defined outside of myLocalScope
  // console.log(myVar);
  
  // Now remove the console log line to pass the test