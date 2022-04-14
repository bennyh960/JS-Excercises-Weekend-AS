// ? Tribonachi
// you need to create a fibonacci function
// that given a signature array/list, returns the first n elements - signature included of the so
// seeded sequence.
// Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then
// return an empty array (except in C return NULL) and be ready for anything else which is not
// clearly specified ;)


const fib = (n, fibonachi) => {
    
    for (let i = 3; i < n ; i++) {
        if (typeof fibonachi[i-3] !== "number")
            return 'Error'
        fibonachi.push(fibonachi[i -1] + fibonachi[i - 2] + fibonachi[i - 3])
    }
    return (n === 0) ? [] : fibonachi;
  };

console.log(fib(10,[0, 0, 1] ));