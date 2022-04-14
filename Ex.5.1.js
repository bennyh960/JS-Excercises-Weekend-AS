// Trimming string
// It's pretty straightforward. Your goal is to create a function that removes the first and last
// characters of a string. You're given one parameter, the original string. You don't have to worry
// with strings with less than two characters.




const trimming = str => str.slice(1,-1);

function test(expected, actual) {
    console.log("Expected: " + expected + "\t\t>>>\t\t" + "Actual : " + actual);
  }

test("ell",trimming("hello"));
test("ello worl",trimming("hello world"));
