//? Isogram
// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement
// a function that determines whether a string that contains only letters is an isogram. Assume the
// empty string is an isogram. Ignore letter case.
// isIsogram("Dermatoglyphics") == true
// isIsogram("aba") == false
// isIsogram("moOse") == false // -- ignore letter case

const isIsogram = (str) => {
  if (str.length > 26) return "ERROR";

  let test = "";
  let strLower = str.toLowerCase();
  for (let w of strLower) {
    if (test.includes(w)) return false;
    test += w;
  }
  return true;
};

//TODO : check hashmap

function test(expected, actual) {
  console.log("Expected: " + expected + "\tActual : " + actual);
}

test(true, isIsogram("abcd"));
test(true, isIsogram("ambidextrously"));
test(false, isIsogram("abcA"));
test(false, isIsogram("CScA"));
