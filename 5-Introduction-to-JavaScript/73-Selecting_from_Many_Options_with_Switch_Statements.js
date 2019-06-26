// Switch statements in JS allow to test a condition for its value and data type. After the condition is met, then the statement written in the case is executed.
// The break keyword will tell JS to exit the switch statement and stop all condition testing.

function caseInSwitch(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }

    // Only change code above this line  
    return answer;
}

// Change this value to test
caseInSwitch(1);