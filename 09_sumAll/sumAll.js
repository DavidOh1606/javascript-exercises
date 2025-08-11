const sumAll = function(one, two) {
    if (one < 0 || two < 0 || !Number.isInteger(one + two)) return "ERROR";

    let sum = 0;

    let start;
    let end;

    if (one > two) {
        start = two;
        end = one;
    }

    else {
        start = one;
        end = two;
    }


    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
