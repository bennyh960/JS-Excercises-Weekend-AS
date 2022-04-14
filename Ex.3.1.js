//? Growth Of population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly 
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the 
// town. How many years does the town need to see its population greater or equal to p = 1200 
// inhabitants? 

// p0 = 1000 
// p1 = p0 + (p0 * 0.02)   + ( 50 )
// p2 = p1 + (p1 * 0.02)   + ( 50 )
// p3 = p2 + (p2 * 0.02)   + ( 50 )

const popGrowth = (year) => {
    const p0 = 1000;
    let pPerYear = p0;
    for (let _ = 0; _ < year ; _++) {
        pPerYear = Math.floor(pPerYear + (0.02 * pPerYear) + 50);
    }
    
    return pPerYear;
}

console.log(popGrowth(1));
console.log(popGrowth(2));
console.log(popGrowth(3));
console.log(popGrowth(4));