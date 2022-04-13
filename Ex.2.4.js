//? Unique
// There is an array with some numbers. All numbers are equal except for one. Try to find it! 
// findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2 
// findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55 
// It’s guaranteed that array contains at least 3 numbers. 

const arr = [ 2, 1, 1, 1, 1, 1 ];
const arr1 = [ 1, 2, 1, 1, 1, 1 ];
const arr2 = [ 1, 1, 2, 1, 1, 1 ];
const arr3 = [ 1, 1, 1, 2, 1, 1 ];
const arr4 = [ 1, 1, 1, 1, 2, 1 ];
const arr5 = [ 1, 1, 1, 1, 1, 2 ];



function unique(arr){
    for(let i = 1 ; i < arr.length  ;i++){
        if(( arr[i] != arr[i + 1] && arr[i + 1] === arr[i - 1])){
            // console.log('x');
            return arr[i];
        }
        if ( i === arr.length - 1 && arr[i] !== arr[i-1]){
            // console.log('cond 2');
            return arr[i]
        }
    } 
    return arr[0];
}


console.log(unique(arr));
console.log(unique(arr1));
console.log(unique(arr2));
console.log(unique(arr3));
console.log(unique(arr4));
console.log(unique(arr5));


