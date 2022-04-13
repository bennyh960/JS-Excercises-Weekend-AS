// Create a function that returns the sum of the two lowest positive numbers given an array of 
// minimum 4 positive integers. No floats or non-positive integers will be passed. 
// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7. 
// [10, 343445353, 3453445, 3453545353453] should return 3453455.

const sumLowest = arr => {
    let min1 = Math.min(...arr);
    let min2 = Math.max(...arr);

    for (let num of arr) {
        if (num < min2 && num > min1 ){
            min2 = num
        }
    };
    return min1 + min2
}

const arr = [19, 5, 42, 2, 77]
const arr2 = [10, 343445353, 3453445, 3453545353453]


console.log(sumLowest(arr));
console.log(sumLowest(arr2));


// also i could use sort and then choose the first 2 elements but we didnt learned it yet

const sumMin = arr => {
    arr.sort(function(a, b){return a - b});
    return arr[0] + arr[1];
}

console.log(sumMin(arr));
console.log(sumMin(arr2));