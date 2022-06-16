// Assignment code here
// Get references to the #generate element
const generateBtn = document.querySelector("#generate");
const passwordText = document.querySelector("#password");
// variables to be used in generate password function
const lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function toUpper(letter) {
  return letter.toUpperCase();
}

const upperCase = lowerCase.map(toUpper);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", ",", "+", "-", ".", "/",  ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
  passwordText.value = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start of generate password function
function generatePassword() {
  passwordLength = prompt("How many charcters would you like your password to be? Choose between 8 and 128.");
  // checks if something was entered
  if(!passwordLength) {
    return generatePassword();
  }
  // checks if number is a number and between 8 and 128
  else if (Number.isNaN(parseInt(passwordLength)) || passwordLength < 8 || passwordLength > 128) {
    alert("You must enter a number between 8 and 128.");
    return generatePassword()
  };

  // confirms what type of characters the user wants in their password
  const confirmLower = confirm("Click OK to include lower case letters.");
  const confirmUpper = confirm("Click OK to include upper case letters.");
  const confirmNumber = confirm("Click OK to include numbers.");
  const confirmSpecial = confirm("Click OK to include special characters.");
 
  // start of if statements checking what characters the user selected
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    alert("You must choose a criteria.");
    return generatePassword();
  }

  let userChoices = [];

  if (confirmLower) {
    userChoices = userChoices.concat(lowerCase);
  }
  if (confirmUpper) {
    userChoices = userChoices.concat(upperCase);
  }
  if (confirmNumber) {
    userChoices = userChoices.concat(numbers);
  }
  if (confirmSpecial) {
    userChoices = userChoices.concat(special);
  }
  // variable for password for loop
  const passwordBlank = [];
  // generating password for loop
  for (let i = 0; i < passwordLength; i++) {
    const randomChar = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(randomChar);
  }

  var password = passwordBlank.join("");
  return password;
}
// end of generate password function