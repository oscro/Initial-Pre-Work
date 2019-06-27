// ES6 allows for the declaration of a function as an object's method by simply placing the name followed by parenthesis.
// 

// change code below this line
const bicycle = {
    gear: 2,
    setGear(newGear) {
        "use strict";
        this.gear = newGear;
    }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);