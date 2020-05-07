// Assignment Code: defines the button tagged as "generate" as the trigger
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button: sets the writePassword function to go off when the trigger is clicked
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input: takes the user data and prints it
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// STEP: set up a function to input the desired characters and length and generate a string from them to use as the password

function generatePassword() {
  var length = prompt("Choose a password length (8 to 128 characters).");
  length = parseInt(length);
  // note: parseInt function turns a string into an integer
  
  // note: isNaN checks if a variable is a number. "number.isNaN" does this without converting to string first
  if (isNaN(length)) {
    alert("That's not even a number.");
    return "Try a number, buddy";
  };
  
  // STEP: check that the input is between 8 and 128 characters
  if (length < 8) {
    alert("Not enough letters.");
    return "Password too short.";
  };
  
  if (length > 128) {
    alert("Too many letters.");
    return "Way too long, what are you thinking?";
  };
  
  // STEP: have user choose which character types to include
  var includeSpecials = confirm("Include special characters?");
  var includeNumerics = confirm("Include numerals?");
  var includeLowerCase = confirm("Use lowercase letters?");
  var includeUpperCase = confirm("Use uppercase letters?");
  
  if (!includeSpecials && !includeNumerics && !includeLowerCase && !includeUpperCase) {
    alert("Pick at least one.");
    return "No characters selected";
  };
  
  
  // NEXT STEP: create a pool of characters by combining the chosen arrays into a new array
  // ATTEMPT: trying to push chosen arrays into new array. needs to make a connection between a given value being "true" and pulling in the corresponding array
  var charSelections = [includeSpecials, includeNumerics, includeLowerCase, includeUpperCase];
  var charArrays = [specialArray, numeralArray, lowerCaseArray, upperCaseArray];
  var charMix = [];
  for(i = 0; i < charSelections.length; i++) {
    if(charSelections[i] === true) {
      charMix.push(charArrays[i]);
    }
  }
  console.log(charMix);
  
  // THEN: use a loop based on the input password length to randomly select a character that many times from the new array
  var randomizedChars = "";
  for (i = 0, n = charArrays.length; i < length; i++) {
    randomizedChars += charArrays.charAt(Math.floor(Math.random() * n));
  }
  console.log(randomizedChars);




  // THEN: combine the randomly selected characters into a string and print them to the text box
  return randomizedChars
  
  
  
  
  
  // another dead end?
  // if (includeSpecials === true) {userPicks.concat(specialArray)};
  // if (includeNumerics === true) {userPicks.concat(numeralArray)};
  // if (includeLowerCase === true) {userPicks.concat(lowerCaseArray)};
  // if (includeUpperCase === true) {userPicks.concat(upperCaseArray)};
  // var userPicks = [];
  // console.log(userPicks);
  
} 


// Character lists below
var specialArray = [
  "@",
  "%",
  "+",
  "!",
  "#",
  "$",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  ".",
  ";",
];

var numeralArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperCaseArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];



