// Assignment Code: defines the button tagged as "generate" as the trigger.
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button: sets the writePassword function to go off when the trigger is clicked.
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input: takes the user data and prints it to the text box.
function writePassword() {
  // Define the password as the result of the generatePassword function.
  var password = generatePassword();
  // Define the variable passwordText as the element labeled "password".
  var passwordText = document.querySelector("#password");

  // Define the value of the element labeled password (which is made equal to passwordText above) as the value of this function's password variable, which in turn is made equal to the result of the generatePassword function.
  passwordText.value = password;
}

// Set up a function to input the desired characters and length and generate a string from them to use as the password
// Define the generatePassword function:
function generatePassword() {
  // Declare that Within this function, length is equal to the result of the prompt.
  var length = prompt("Choose a password length (8 to 128 characters).");
  // Turn the result of the above prompt into an integer.
  length = parseInt(length);
  
  // Check whether the input is a number, and send a rejection message if it isn't.
  if (isNaN(length)) {
    alert("That's not even a number.");
    return "Try a number, buddy";
  };
  
  // Check that the input is between 8 and 128 characters, send reject message if it isn't.
  if (length < 8) {
    alert("Not enough letters.");
    return "Password too short.";
  };
  
  if (length > 128) {
    alert("Too many letters.");
    return "Way too long, what are you thinking?";
  };
  
  // Have user choose which character types to include.
  var includeSpecials = confirm("Include special characters?");
  var includeNumerics = confirm("Include numerals?");
  var includeLowerCase = confirm("Use lowercase letters?");
  var includeUpperCase = confirm("Use uppercase letters?");
  

  // Send a rejection message if they didn't choose any character types.
  if (!includeSpecials && !includeNumerics && !includeLowerCase && !includeUpperCase) {
    alert("Pick at least one.");
    return "No characters selected";
  };
  
  // Declare an empty string called password that we can fill with our random characters.
  var password = "";
  
  // Create a loop that picks a random character from within the selected arrays, and repeat it the number of times that the user chose for their password length at the beginning of this function.
  for (var i = 0; i < length; i++) {
    // If the user confirmed "include special characters" prompt,    
    if (includeSpecials) {
      // Then get a random value from the array of special characters.
      password += getRandomValue(specialArray);
    };
      // Repeat the above for numerals and so on.
    if (includeNumerics) {
      password += getRandomValue(numeralArray);
    };
    if (includeLowerCase) {
      password += getRandomValue(lowerCaseArray);
    };
    if (includeUpperCase) {
      password += getRandomValue(upperCaseArray);
    };
};
// The above code will repeat itself by the user-input length but it will do it again for each different value they picked. if they included all 4 characters types they'll end up with a password 4 times the desired length. The below returns a slice of the character string equal to the desired length instead of the whole string, so we don't care about having extra letters.
return password.slice(0, length);


// This function allows us to use invoke getRandomValue above to pull a random value from the named array.
  function getRandomValue(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  };
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

// end of script