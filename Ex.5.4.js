// TODO need to fix bug in opetion 2
// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same
// string with all even indexed characters in each word upper cased, and all odd indexed
// characters in each word lower cased.
//  The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased.
// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only
// be present if there are multiple words. Words will be separated by a single space(' ').
// Examples:
// toWeirdCase( "String" );//=> returns "StRiNg"
// toWeirdCase( "Weird string case" );//=> returns "WeIrD StRiNg CaSe"

// ! O(n^2)
const toWeirdCase2 = str => {
    let words = str.split(" ");
    let wierdCase = '';
    for (let word = 0 ; word < words.length ; word++) {
        for (let char = 0 ; char < words[word].length ; char++){
            char % 2 === 0 ?  wierdCase +=  words[word][char].toUpperCase() :   wierdCase +=  words[word][char].toLowerCase() ;
        }
        wierdCase += " ";
    } 
    return wierdCase
}

// ! O(n) but more complex code
const toWeirdCase = str => {
    let letters = str.split("");
    
    return letters.map( (e,i) => {

        if ( e === " " && i % 2 !== 0){
            if( i % 2 === 0){
                return e.toUpperCase();
            }else {
                return e.toLowerCase();
            }
        } else {
            if( i % 2 === 0){
                return e.toUpperCase();
            }else {
                return e.toLowerCase();
            }
        }
        
    }).join("");

}


// ? option 1
console.log(toWeirdCase("appelseeds"));
console.log(toWeirdCase("appel seeds"));
console.log(toWeirdCase("hello world what a beutiful day"));
// ? option 2
console.log(toWeirdCase("appelseeds"));
console.log(toWeirdCase("appel seeds"));
console.log(toWeirdCase("hello world what a beutiful day"));  //! bug to fix
