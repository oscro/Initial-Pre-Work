// If there is a globally scoped variable and a function scoped variable with the same name, the function scoped variable will take precedence when called within the function. 

// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
  var outerWear = "sweater";
  
  
  // Only change code above this line
  return outerWear;
}

myOutfit();