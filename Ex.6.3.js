// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the
// longest possible, containing distinct letters,
// each taken only once - coming from s1 or s2.
// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"
// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz

const concat = (s1, s2) => {
    let bigWord ='';
    for(let letter of (s1+s2)){
        !bigWord.includes(letter) && (bigWord += letter);
    }
    return [...bigWord].sort().join("")
}

console.log(concat('xyaabbbccccdefww','xxxxyyyyabklmopq'));
console.log(concat('xyaabbbccccdefww','xyaabbbccccdefww'));
console.log(concat('abcdefghijklmnopqrstuvwxyz','abcdefghijklmnopqrstuvwxyz'));