//? Abbreviate two words
// Write a function to convert a name into initials. This kata strictly takes two words with one space
// in between them.
// The output should be two capital letters with a dot separating them.
// It should look like this:
// Sam Harris => S.H

// ? We didnt asked for validtaion and we asked for 2 words only
const abbreviate = str => str.split(" ")[0][0].toUpperCase() + '.' + str.split(" ")[1][0].toUpperCase()

console.log(abbreviate('benny hassan'));

// TODO : add validaion and improve code