// In digital numeral systems, the radix or base is the number of unique digits, including the digit zero, used to represent numbers in a positional numeral system.
// Source: https://en.wikipedia.org/wiki/Radix
// The second argument in the parseInt() function specifies the radix or base of the number.

function convertToInteger(str) {
    console.log(parseInt(str, 2));
    return parseInt(str, 2);
}

convertToInteger("10011");