# UTA Bootcamp Challenge 3

In this homework assignment from the University of Texas-Austin Bootcamp we were asked to make a password generator with some starter code that would prompt the user for how many and what kind of characters they want. Kind of like ordering a sandwich. So I gave my password generator the personality typical of a Philly Cheesestake vendor.

We were given this starter code:

##starter code


```
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

```

Our wonderful instructor Leah Nelson also talked through some pseudo-code with us.

##Assignment Details:

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```
##What I took away from this assignment

1. There's no reason this can't be fun.
2. I need to learn more about validating data efficiently
