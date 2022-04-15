// ? Shortest word
// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types

// ! option 1
const shortest = sentence => {
    let words = [...sentence];
    let minWord = words[0];
    for(let word of words){
        if(word.length < minWord.length){
            minWord = word;
        }
    }
    return minWord.length;
    
}
console.log(shortest("hi how are you today?"));



// ! option 2
const shortestWithSort = str => str.split(" ").sort((a,b)=> a.length - b.length)[0].length;
console.log(shortestWithSort("how are you?"));