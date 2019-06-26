// Omitting the break statement from a switch statement's case will cause it to continue testing cases until a break is encountered. 

function sequentialSizes(val) {
    var answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
            answer = "Low";
        case 2:
            answer = "Low";
        case 3:
            answer = "Low";
            break;
        case 4:
            answer = "Mid";
        case 5:
            answer = "Mid";
        case 6:
            answer = "Mid";
            break;
        case 7:
            answer = "High";
        case 8:
            answer = "High";
        case 9:
            answer = "High";
            break;
    }
    // Only change code above this line  
    return answer;
}

// Change this value to test
sequentialSizes(1);