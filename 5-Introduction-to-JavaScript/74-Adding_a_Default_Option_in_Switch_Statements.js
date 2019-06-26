// Switch statements may have a default case that will execute when no previous condition has been met. The default case should be written at the end of the switch statement.

function switchOfStuff(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            console.log(answer);
            break;
        case "b":
            answer = "bird";
            console.log(answer);
            break;
        case "c":
            answer = "cat";
            console.log(answer);
            break;
        default:
            answer = "stuff";
            console.log(answer);
            break;
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
switchOfStuff("a");