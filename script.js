// Assignment Code
var generateBtn = document.querySelector("#generate");

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
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
