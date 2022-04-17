// HackerRank Challenge

// This is an introductory challenge to help you get familiar with the HackerRank coding environment.
// Complete the function solveMeFirst to compute the sum of two integers.
// Function prototype:
// int solveMeFirst(int a, int b);
// where

const solveMeFirst = (a, b) => a + b;

// implement filter
const filter = (arr, callback) => {
  if (!Array.isArray(arr)) return "invalid filter arrguments";
  const newArr = [];
  for (let element of arr) {
    if (callback(element)) newArr.push(element);
  }
  return newArr;
};

const grater = (num) => (num > 3 ? true : false);

console.log(filter([1, 2, 3, 4, 5, 6, 7], grater));

array.forEach((element) => {});
// ========================= for each ================================
