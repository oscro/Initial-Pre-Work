// We used Math.random() to generate a random decimal from 0.00 - 0.99999 and then multiplied it by 10 to get a range of 0.00 - 9.9999.
// We then used the method .floor() of the Math object to round the number down to the nearest whole number to achieve a random number from 0 - 9.

var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
    // Only change code below this line.
    console.log(Math.floor(Math.random() * 10));
    return Math.floor(Math.random() * 10);
}