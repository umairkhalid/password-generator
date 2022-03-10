// Assignment Code
var generateBtn = document.getElementById("generate");

// Declaration of different character types to add in password
var chars = '!@#$%^&*(){}[]=<>/,.';
var upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var lower = 'abcdefghijklmnopqrstuvwxyz';
var num = '0123456789'; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;

}

// Password generation function
function generatePassword() {

  var password = "";
  var passChar = "";
 
  // Ask for entering the appropriate length of Password
  var passLength = prompt("Please choose a password to be at least between 8 characters and no more than 128 characters");
  passLength = parseInt(passLength);

  // Validating the appropriate lenght entered and not blank
  if (isNaN(passLength) || passLength < 8 || passLength > 128) {
    alert('Please select the appropriate length of password!');
    return generatePassword();
  }

  // Adding lower case characters to password
  var passLowerCase = confirm("Do you want lower case in your password?");
  if (passLowerCase === true) {
    passChar += lower;
  }

  // Adding upper case characters to password
  var passUpperCase = confirm("Do you want upper case in your password?");
  if (passUpperCase === true) {
    passChar += upper;
  }

  // Adding numbers to password
  var passNum = confirm("Do you want numbers in the password?");
  if (passNum === true) {
    passChar += num;
  }

  // Adding special characters to password
  var passSpecial = confirm("Do you want special characters in your password?");
  if (passSpecial === true) {
    passChar += chars;
  }

  // Validatiing at least one character type selected
  if (!passLowerCase && !passUpperCase && !passNum && !passNum) {
    alert("You must select at least one character type to add!");
    return generatePassword();
  }

  // loop for getting random characters
  for (var i = 0; i < passLength; i++) {
    password += passChar[Math.floor(Math.random() * passChar.length)]
  }
return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

