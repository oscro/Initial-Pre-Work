// JavaScript classes, introduced in ECMAScript 2015, are primarily syntactical sugar over JavaScript's existing prototype-based inheritance. The class syntax does not introduce a new object-oriented inheritance model to JavaScript.
// An important difference between function declarations and class declarations is that function declarations are hoisted and class declarations are not. You first need to declare your class and then access it, otherwise code like the following will throw a ReferenceError:
// Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// Hoisting is essentially being able to call a function or variable prior to it being declared because JS will hoist it to the top - essentially globally available. 
// The constructor portion of the class will be called when a new object is instatiated and passed a value. 

function makeClass() {
    "use strict";
    /* Alter code below this line */
    class Vegetable {
        constructor(name) {
            this.name = name;
        }
    }
    /* Alter code above this line */
    return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'