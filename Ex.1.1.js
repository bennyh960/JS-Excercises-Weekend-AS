// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

const takeBoolean = (bool) => {
    let toReturn;
    bool ? toReturn = "Yes" : toReturn = "No";
    return toReturn;
}

//? tests
console.log(takeBoolean(true));
console.log(takeBoolean(false));
console.log(takeBoolean(1));
console.log(takeBoolean(0));
 