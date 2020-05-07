// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var length = prompt("Choose a password length (8 to 128 characters).");
  length = parseInt(length);
  // note: parseInt function turns a string into an integer
  
  // note: isNaN checks if a variable is a number. "number.isNaN" does this without converting to string first
  if (isNaN(length)) {
    alert("That's not even a number.");
    return "Try a number, buddy";
  }
  
  if (length < 8) {
    alert("Not enough letters.");
    return "Password too short.";
  }

  if (length > 128) {
    alert("Too many letters.");
    return "Way too long, what are you thinking?";
  }

  var specials = confirm("Include special characters?");
  var numerics = confirm("Include numerals?");
  var lowerCaseLetters = confirm("Use lowercase letters?");
  var upperCaseLetters = confirm("Use uppercase letters?");

  if (!specials && !numerics && !lowerCaseLetters && !upperCaseLetters) {
    alert("Pick at least one.");
    return "No characters selected";
  }
  

  if (specials === true) {userPicks.concat(specialArray)};
  if (numerics === true) {userPicks.concat(numerals)};
  if (lowerCaseLetters === true) {userPicks.concat(lowerCaseAlphabet)};
  if (upperCaseLetters === true) {userPicks.concat(upperCaseAlphabet)};
  var userPicks = []
  
  console.log(userPicks);

  // below: dead end??
  // var charSelections = [specials, numerics, lowerCaseLetters, upperCaseLetters];
  // var charMix = [];

  // for(i = 0; i < charSelections.length; i++) {
  //   if(charSelections[i] === true) {
  //     charMix.push(charSelections[i]);
  //   }
  // }
  // console.log(charMix);

} 
  


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

var numerals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerCaseAlphabet = [
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

var upperCaseAlphabet = [
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



