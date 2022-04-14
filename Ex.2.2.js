// ? One and Zero - Binary

// Given an array of ones and zeroes, convert the equivalent binary value to an integer.

// const arr = [1,1,0,1];

const binaryToDecimal = (arr) => {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += (arr[i] * 2) ** (arr.length - i - 1);
  }
  return total;
};
console.log(binaryToDecimal([0, 0, 0, 1])); //1
console.log(binaryToDecimal([0, 1, 0, 1])); //5
console.log(binaryToDecimal([1, 0, 0, 1])); //9
console.log(binaryToDecimal([1, 1, 1, 1])); //15
