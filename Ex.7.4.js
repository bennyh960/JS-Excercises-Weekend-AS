// Linear Search

// Problem: Given an array arr[] of n elements, write a function to search a given element x in
// arr[].

// unsorted array

// create random big array:
const arr = [];
let num;
while (arr.length < 10000) {
  num = Math.round(100 * Math.random());
  arr.push(num);
}

console.log(arr);

console.time("start");
// O(n)
const searchL = (arr, x) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return `Element ${x} is present at index ${i}`;
  }
  return "-1";
};

console.log(searchL(arr, 2));
console.timeEnd("start");

// ===================================================================================
console.time("methode 2 : i and j");
// better operation n+1/2
const searchL2 = (arr, x) => {
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (arr[i] === x) return `Element ${x} is present at index ${i}`;
    if (arr[j] === x) return `Element ${x} is present at index ${j}`;
  }
  return "-1";
};
console.log(searchL2(arr, 2));
console.timeEnd("methode 2 : i and j");
