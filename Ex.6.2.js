// Counting duplicate

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and
// numeric digits that occur more than once in the input string. The input string can be assumed to
// contain only alphabets (both uppercase and lowercase) and numeric digits.
// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

const countDuplicate = str => {
    const obj = {};
    let temp;
    let counter = 0;
    let returnStatment = ' # ';

    for(let i = 0; i < str.length ; i++){
        temp = str[i].toLowerCase();
        obj[temp] ? obj[temp] += 1 : obj[temp] = 1;
        
    }

    
    for( key in obj){
        if(obj[key] > 1){
            counter += 1;
            returnStatment += `${key} (occurs ${obj[key]} times)` 
            returnStatment += ' and '
        }

    }
    return counter + returnStatment.slice(0,-4);
}

console.log(countDuplicate("aabccdD"));
console.log('d' - 'D');
