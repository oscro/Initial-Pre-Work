// const is a read only variable which means it cannot be reassigned to another value.

function printManyTimes(str) {
    "use strict";

    // change code below this line
    const SENTENCE = str + " is cool!";
    for (let i = 0; i < str.length; i += 2) {
        console.log(SENTENCE);
    }
    // change code above this line
}
printManyTimes("freeCodeCamp");