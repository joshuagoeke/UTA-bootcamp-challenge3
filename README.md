# UTA Bootcamp Challenge 3

In this homework assignment from the University of Texas-Austin Bootcamp we were asked to make a password generator with some starter code that would prompt the user for how many and what kind of characters they want. Kind of like ordering a sandwich. So I gave my password generator the personality typical of a Philly Cheesestake vendor.

We were given this starter code:

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

Our wonderful instructor Leah Nelson also talked through some pseudo-code with us.

#
