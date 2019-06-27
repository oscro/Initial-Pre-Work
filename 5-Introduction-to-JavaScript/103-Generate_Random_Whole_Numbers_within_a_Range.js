// Line 15 is achieving a random number between a range dictated by the arguments when called. 
// It will never be lower than the minimum because the min is being added to the final number.
// Subtracting the min from the max and adding one and the min will assure that it doesn't surpass the max. 

// Example
function ourRandomRange(ourMin, ourMax) {

    return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

ourRandomRange(1, 9);

// Only change code below this line.

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

// Change these values to test your function
var myRandom = randomRange(5, 15);