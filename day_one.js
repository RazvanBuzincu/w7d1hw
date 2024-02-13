// //==================Exercise #1 ==========//
// /*Write a function that takes in the string and the list of dog names, loops through 
// the list and checks that the current name is in the string passed in. The output should be:
// "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
// For extra credit, output "Thats a damn cat" 
// */

// let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool.\
// Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy."

// let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"]

function findDogName(dogString, dogNames) {
    let foundMatch = false; 

    for (let i = 0; i < dogNames.length; i++) {
        if (dogString.includes(dogNames[i])) {
            console.log("Matched " + dogNames[i]); 
            foundMatch = true;
        }
    }
    // For extra credit: Check if the dogString contains "cat"
    if (dogString.includes("cat")) {
        console.log("That's a damn cat");
    } else if (!foundMatch) {
        console.log("No Matches");
    }
}
let dogString = "All dogs are good boys. Dogs named Precious can be annoying but are still good. Dogs named Shadow are usually majestic and cool. Sassy is a cat, but Chance is a dog. Can cat people be trusted? I don't know. Also Potato is a great dog name for a lil tiny stubby guy.";
let dogNames = ["Fido", "Precious", "Sassy", "Gertrude", "Shadow", "Potato", "Bart"];

findDogName(dogString, dogNames);


// //============Exercise #2 ============//
// /*Write a fucntion that takes in an array and removes every even index with a splice,
// and replaces it with the string "even index". For bonus points instead of inserting even index
// replace each character with their signature move.*/

// arr == ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"]
function replaceEvenIndexes(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (!(i % 2)) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}


let arr = ["Goku", "Vegeta", "Trunks", "Krillin", "Gohan", "Piccolo"];
replaceEvenIndexes(arr);
console.log(arr);


// https://www.codewars.com/kata/5265326f5fda8eb1160004c8
// using JS

function numberToString(num) {   
    return num.toString();
  }
  const myNumber = 123;
  const myString = numberToString(myNumber);
  console.log(myString); 
  


// https://www.codewars.com/kata/50654ddff44f800200000004
// using JS

function multiply(a, b) {
    return a * b;
  }
  const result = multiply(3, 4);
  console.log(result); 
  



