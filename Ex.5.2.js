// Write a function called repeat_str which repeats the given string src exactly count times.
// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// ?one line
const repeat_str = (n, str) => str.repeat(n);

console.log(repeat_str(5, "Hello"));

//? with for loop
const repeat_str_2 = (n, str) => {
  let word = str;
  for (let i = 1; i < n; i++) {
    str += word;
  }
  return str;
};

console.log(repeat_str_2(5, "Hello"));
