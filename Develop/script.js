// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// variables to be used in generate password function
var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", ",", "+", "-", ".", "/",  ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// start of generate password function
function generatePassword() {
  passwordLength = prompt("How many charcters would you like your password to be? Choose between 8 and 128.");
  console.log("Password length " + passwordLength);
  // checks if something was entered
  if(!passwordLength) {
    alert("Please enter a number between 8 and 128.");
    generatePassword();
  }
  // checks if number is between 8 and 128
  else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("You must enter a number between 8 and 128.");
    console.log("Password length " + passwordLength);
    generatePassword();
  }
  // confirms what type of characters the user wants in their password
  else {
    confirmLower = confirm("Click ok to include lower case letters.");
    console.log("Lower case " + confirmLower);
    confirmUpper = confirm("Click ok to include upper case letters.");
    console.log("Upper case " + confirmUpper);
    confirmNumber = confirm("Click ok to include numbers.");
    console.log("Number " + confirmNumber);
    confirmSpecial = confirm("Click ok to include special characters.");
    console.log("Special Charcter " + confirmSpecial);
  };
  // start of if statements checking what characters the user selected
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
    userChoices = alert("You must choose a criteria.");
    generatePassword();
  }
  else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmNumber) {
    userChoices = lowerCase.concat(upperCase, numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers, special);
    console.log(userChoices);
  }
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
    console.log(userChoices);
  }
  else if (confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
    console.log(userChoices);
  }
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
    console.log(userChoices);
  }
  else if (confirmLower) {
    userChoices = lowerCase;
    console.log(userChoices);
  }
  else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
    console.log(userChoices);
  }
  else if (confirmNumber) {
    userChoices = numbers;
    console.log(userChoices);
  }
  else if (confirmSpecial) {
    userChoices = special;
    console.log(userChoices);
  };
  // variable for password for loop
  var passwordBlank = [];
  // generating password for loop
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  var password = passwordBlank.join("");
  console.log("Your password is: " + password);
  return password;
}