// ? Summation
// Write a program that finds the summation of every number from 1 to num. The number will 
// always be a positive integer greater than 0. 

const sumRange = (num) => {

    // if negative number
    num < 0 ? num *= -1 : num

    let res = 0;
    for (let i = 1; i <= num; i++) {
        res += i
    }
    return res;
}

console.log(sumRange(-2));
console.log(sumRange(2));
console.log(sumRange(8));