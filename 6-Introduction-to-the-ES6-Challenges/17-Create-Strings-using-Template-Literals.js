// Template literals allow for the creation of complex strings without concatenating strings through the addition operator. 
// Wrapping portions of the string in ${} will signal to JS that the expression in between should be regarded as an operation or variable.

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["id-blacklist", "no-dup-keys"]
};
function makeList(arr) {
    "use strict";

    // change code below this line
    const resultDisplayArray = [`<li class="text-warning">${arr[0]}</li>`, `<li class="text-warning">${arr[1]}</li>`, `<li class="text-warning">${arr[2]}</li>`];
    // change code above this line

    return resultDisplayArray;
}
/**
 * makeList(result.failure) should return:
 * [ `<li class="text-warning">no-var</li>`,
 *   `<li class="text-warning">var-on-top</li>`, 
 *   `<li class="text-warning">linebreak</li>` ]
 **/
const resultDisplayArray = makeList(result.failure);