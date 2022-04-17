//? Numbling
// This time no story, no theory. The examples below show you how to write function
// accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// TODO : verify which line is the correct 7 or 8
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-zzzz-Tttttt-Yyyyyyy"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeeezzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

const accum = (word) => {
  const arr = word.split("");
  let newWord = "";

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      j === 0
        ? (newWord += arr[i].toUpperCase())
        : (newWord += arr[i].toLowerCase());
    }
    i < arr.length - 1 ? (newWord += "-") : (newWord += "");
  }
  return newWord;
};

console.log(accum("abcd"));
console.log(accum("RqaEzty"));
console.log(accum("cwat"));
