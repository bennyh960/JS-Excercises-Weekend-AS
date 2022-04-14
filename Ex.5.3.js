// Complete the method/function so that it converts dash/underscore delimited words into camel
// casing.
//  The first word within the output should be capitalized only if the original word was
// capitalized (known as Upper Camel Case, also often referred to as Pascal case).
// Examples
// toCamelCase("the-stealth-warrior") // returns "theStealthWarrior"
// toCamelCase("The_Stealth_Warrior") // returns "TheStealthWarrior"

const toCamelCase = str => {
    let tempArr = [];
    let error = false;
    str.includes("-") ? tempArr = str.split("-") : (str.includes("_") ? tempArr = str.split("_") : error = true);
    if(error) return str

    for (let i = 1; i < tempArr.length; i++) {
        tempArr[i] = tempArr[i][0].toUpperCase() + tempArr[i].slice(1);
    }
    return tempArr.join("");
}

function test(expected, actual) {
    console.log("Expected: " + expected + "\t\t>>>\t\t" + "Actual : " + actual);
  }

test("helloWorld",toCamelCase("hello_world")) //underline case to cameCase
test("helloWorld",toCamelCase("hello-world")) //dash case to camelCase
test("helloworld",toCamelCase("helloworld")) //one word
test("helloWorldGoodDay",toCamelCase("hello_World_good_day")) //underline case to cameCase



