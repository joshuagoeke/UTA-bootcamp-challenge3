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

//variables
var lowerCase =["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var number = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24,'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var inclLower;
var inclUpper;
var inclNum;
var inclSpecial;





function generatePassword(){
  //must return a string value that is the password
  //user is prompted for pw length between 8 and 128
var thisMany;
var howMany = window.prompt("I'll help you make up a gobbledygook password./n How many characters do you want?\n Pick a number between 8 and 128.");

if (isNan(howMany)){
  window.alert("Listen smarty-pants, when I ask for a number between 8 and 128 I mean that I want a NUMBER (8,9,10,11...) between 8 and 128.\n Try again.");
  // break
} else {
  if (howMany <=8 || howMany >= 128){
    window.alert("OK, I'm gonna say this again real slow. I want a number BIGGER than 8, but SMALLER than 128. There are at least 131 correct answers if you include the 8 and the 128, which I do.\n Pick one.");
    // break
  } else {
    if (Number.isInteger(howMany) === false){
      thisMany = Math.round(howMany);
      window.alert("Jeez Einstein. No reason to make it difficult. I rounded " + howMany + " to " + thisMany +".\n You're welcome.")
    } else {
      thisMany = howMany;
    }
  }
} window.alert("I don't have time to deal with this. Come back when you want to pick a length for your password. NEXT!");

window.alert("OK, one password with " + thisMany + " characters comin' right up!\n Now I got some y/n questions for yous. That means you can type 'y' for 'yes' or 'n' for 'no.'");
inclLower = window.prompt("Do you want some lowercase letters in that password?" )
if (inclLower == 'y'){
  inclLower = true;
  window.alert("lowercase letters. You got it!")
} else if (inclLower == 'n'){
  inclLower = false;
  window.alert("No lowercase letters. Odd choice, but whatever you say boss.")
} else {
  window.alert("It's 'yes' or 'no' pal. Type 'y' or 'n.'")
}


    //var to save length
  // validate user num
  //confirm whether or not to include lowercase, uppercase, numeric, special characters (4 confirm prompts)
    //4 vars to save T/F of included categories
    //validate that at least one character type is included with for loop
        //how to decide how many elements to choose from each array?
    // random math function getRandomInt(max) {
  //   var compOption =["r", "p", "s"]
  //   return compOption[Math.floor(Math.random()*3)];
  // } 
    //join chosen elements into string
    return passwordString
  }