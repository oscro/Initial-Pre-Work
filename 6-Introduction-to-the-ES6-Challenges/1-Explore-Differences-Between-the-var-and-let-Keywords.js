// In ES6, let was introduced to fix potentially errors that could take place in variable declarations.
// var does not throw an error when declared and assigned twice. let got rid of this issue by throwing an error in the console when a variable is declared twice. 

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();