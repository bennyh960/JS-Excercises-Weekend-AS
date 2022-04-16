// What would be the output of following code?
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA;
arrB[0] = 42;
console.log(arrA); // [42,1,2,3,4,5] >> array is a pointer to the first element

// What would be the output of following code?
var arrA = [0, 1, 2, 3, 4, 5];
var arrB = arrA.slice();
arrB[0] = 42;
console.log(arrA); //[0,1,2,3,4,5]

// What would be the output of following code?
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of arrayA!" },
  3,
  4,
  5,
];
var arrB = arrA;
arrB[0].prop1 = 42;
console.log(arrA); //[{prop1: 42}, {someProp: "also value of arrayA!"},3,4,5];

// What would be the output of following code? //TODO i dont understand why
var arrA = [
  { prop1: "value of array A!!" },
  { someProp: "also value of arrayA!" },
  3,
  4,
  5,
];
var arrB = arrA.slice();
arrB[0].prop1 = 42;
arrB[1].someProp = "Ask Mordi";
arrB[3] = 20;
console.log(arrA); // [{prop1: "value of array A!!"}, {someProp: "also value of arrayA!"},3,4,5];
