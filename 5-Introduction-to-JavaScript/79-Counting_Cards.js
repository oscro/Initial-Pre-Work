// In the example below, we created a card counting application that informed the user to bet or hold based on the cards released in a game of black jack. 
// I could have written it in a switch statement but believed it appeared more modularized in a chained if/else statement. 

var count = 0;

function cc(card) {
    // Only change code below this line
    if (card == 2 || card == 3 || card == 4 || card == 5 || card == 6) {
        count++;
        if (count > 0) {
            return count + " Bet";
        } else {
            return count + " Hold";
        }
    } else if (card == 7 || card == 8 || card == 9) {
        if (count > 0) {
            return count + " Bet";
        } else {
            return count + " Hold";
        }
    } else if (card == 10 || card == "J" || card == "Q" || card == "K" || card == "A") {
        count--;
        if (count > 0) {
            return count + " Bet";
        } else {
            return count + " Hold";
        }
    }

    return "Please input a valid card value.";
    // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');