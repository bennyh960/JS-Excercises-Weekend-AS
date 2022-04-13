// ?  Find the Next Perfect Square

// Complete the findNextSquare method that finds the next integral perfect square after the one 
// passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is 
// also an integer

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the 
// parameter is positive. 

const findNextSquare = n => {
    if(n < 0){
        return 'Please enter possitive number.'
    }
    if(Math.sqrt(n) % 1 === 0){
        return (Math.sqrt(n) + 1 )**2
    }
    return -1;
}

console.log(findNextSquare(0));
console.log(findNextSquare(121));
console.log(findNextSquare(625));
console.log(findNextSquare(114));
console.log(findNextSquare(-114));

