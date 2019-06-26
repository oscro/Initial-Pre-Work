// .hasOwnProperty("propName") is a method that checks an object's properties and tests whether the property exists in the given object. 

// Setup
var myObj = {
    gift: "pony",
    pet: "kitten",
    bed: "sleigh"
  };
  
  function checkObj(checkProp) {
    // Your Code Here
   if (!myObj.hasOwnProperty(checkProp)){
     return "Not Found";
   } else {
     return myObj[checkProp];
   }
  }
  
  // Test your code by modifying these values
  checkObj("gift");