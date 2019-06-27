// JS allows for chained ternary operators which works like a chained if/else statement.

function checkSign(num) {
    return (num > 0) ? "positive" : (num < 0) ? "negative" : "zero";
}

checkSign(10);