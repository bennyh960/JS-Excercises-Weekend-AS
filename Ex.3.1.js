//? Growth Of population

// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly
// increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the
// town. How many years does the town need to see its population greater or equal to p = 1200
// inhabitants?

const nb_year = (p0, percent, aug, p) => {
  if (
    typeof aug !== "number" ||
    typeof p0 !== "number" ||
    typeof p !== "number" ||
    typeof percent !== "number" ||
    percent < 0 ||
    p0 < 0 ||
    p < 0
  )
    return "Invalid data";

  let yearCounter = 0;
  while (p0 < p) {
    p0 = p0 + (p0 * percent) / 100 + aug;
    yearCounter++;
  }
  return yearCounter;
};

function test(expected, actual) {
  console.log("Expected: " + expected + "\tActual : " + actual);
}

test(0, nb_year(1000, 2, 50, 1000));
test(1, nb_year(1000, 2, 50, 1070));
test(2, nb_year(1000, 2, 50, 1141));
test(3, nb_year(1000, 2, 50, 1213));
test(15, nb_year(1500, 5, 100, 5000));
test(10, nb_year(1500000, 2.5, 10000, 2000000));
test("invalid data", nb_year(1500, 5, "100", 5000));
test("invalid data", nb_year(1500, -5, 100, 5000));
test("invalid data", nb_year(1500, "5", 100, 5000));
test("invalid data", nb_year(1500, 5, 100, -5000));
test("invalid data", nb_year(-1500, 5, 100, 5000));
test("invalid data", nb_year("1500", 5, 100, 5000));
