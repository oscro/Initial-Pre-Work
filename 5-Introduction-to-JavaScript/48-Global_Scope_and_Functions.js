// Scope often refers to the accessibility or visibility of variables.
// A globally scoped variable is accessible within any portion of your code. 
// Variables can also be function scoped in which they are only visible within the function it is defined. 
// When variables are created/declared without the var keyword, they are automatically globally scoped.

// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}