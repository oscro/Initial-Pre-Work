// We added a new property to an already existing object by setting a value equal to the new property name. 

// Example
var ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"]
  };
  
  ourDog.bark = "bow-wow";
  
  // Setup
  var myDog = {
    "name": "Happy Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
  };
  
  // Only change code below this line.
  myDog.bark = "Ruff";