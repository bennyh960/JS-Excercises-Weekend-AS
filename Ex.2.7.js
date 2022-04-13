// ? Basic Math
// Your task is to create a function that does four basic . 
// The function should take three arguments - operation(string/char), value1(number), 
// value2(number). 
// The function should return result of numbers after applying the chosen operation. 

const basiOp = (char,val1,val2) => {
    switch(char){
        case '+':
            return val1 + val2;
        case '-':
            return val1 - val2;
        case '*':
            return val1 * val2;
        case '/':
            return val1 / val2;
        default:
            return 'Invalid operation.'
    }
}

console.log(basiOp('+',1,2));
console.log(basiOp('-',10,2));
console.log(basiOp('*',4,7));
console.log(basiOp('/',12,2));
console.log(basiOp('x',12,2));