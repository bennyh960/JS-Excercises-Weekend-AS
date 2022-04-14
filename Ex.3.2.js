// Number of people in the bus
// There is a bus moving in the city, and it takes and drop some people in each bus stop.
// You are provided with a list (or array) of integer arrays (or tuples).
// Each integer array has two items which represent number of people get into bus (The first item) and number of people get
// off the bus (The second item) in a bus stop.
// Your task is to return number of people who are still in the bus after the last bus station (after
// the last array). Even though it is the last bus stop, the bus is not empty and some people are still
// in the bus, and they are probably sleeping there :D
// Take a look on the test cases.
// Please keep in mind that the test cases ensure that the number of people in the bus is always
// >= 0. So the return integer can't be negative.
// The second value in the first integer array is 0, since the bus is empty in the first bus stop

//! second value in the first integer array is 0
//! people get off the bus cant be higher than people in buss (number in bus allwayes > 0)
//! last station no one should get in bus
const peopleInBus = (arr) => {
  let people = 0;
  for (let i = 0; i < arr.length; i++) {
    // !Error validation
    // prettier-ignore
    if (arr[0][1] !== 0 || people < 0 || arr[i][1] > people + arr[i][0] || arr[arr.length - 1][0] !== 0) {
              return "Error";
          }
    people += arr[i][0] - arr[i][1];
  }
  return people;
};

// ********************** Test Function *****************************
function test(expected, actual) {
  console.log("Expected: " + expected + "\t\t>>>\t\t" + "Actual : " + actual);
}

// ? check valid numbers
// prettier-ignore
test(1, peopleInBus([[2, 0], [1, 1], [4, 5], [0, 0]]));
// prettier-ignore
test(0, peopleInBus([[2, 0], [0, 1], [5, 5], [0, 1]]));
// prettier-ignore
test(3, peopleInBus([[5, 0], [3, 1], [4, 5], [0, 3]]));

// ? verify errors
// prettier-ignore
test("Error", peopleInBus([[2, 0], [1, 1], [4, 5], [3, 3]])); // people join in last station
// prettier-ignore
test("Error", peopleInBus([[5, 2], [3, 1], [4, 5], [0, 3]])); // people get off in first station
// prettier-ignore
test("Error", peopleInBus([[2, 0], [3, 1], [4, 5], [0, 4]])); // people in buss is negative
// prettier-ignore
test("Error", peopleInBus([[4, 0], [4, 6], [1, 7], [0, 3]])); // people in buss is negative
// prettier-ignore
test("Error", peopleInBus([[4, 0], [4, 6], [5, 2], [6, 3]])); // people in buss is negative also people join last station
