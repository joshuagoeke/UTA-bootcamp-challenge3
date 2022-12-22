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
console.log(lowerCase);
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
console.log(upperCase);
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12','13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24,'];
console.log(numberChars);
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
console.log(specialCharacters);
var inclLower;
var inclUpper;
var inclNum;
var inclSpecial;



function generatePassword() {
  //must return a string value that is the password
  //user is prompted for pw length between 8 and 128
var thisMany;
var howMany = window.prompt("I'll help you make up a gobbledygook password.\n How many characters do you want?\n Pick a number between 8 and 128.");
if (isNaN(howMany)){
  window.alert("Listen smarty-pants, when I ask for a number between 8 and 128 I mean that I want a NUMBER (8,9,10,11...) between 8 and 128.\n Try again.");
  generatePassword()
} else {
  if (howMany < 8 || howMany > 128){
    window.alert("OK, I'm gonna say this again real slow. I want a number BIGGER than 8, but SMALLER than 128. There are at least 131 correct answers if you include the 8 and the 128, which I do.\nPick one.");
    generatePassword();
} else if (Number.isInteger(howMany)){
            thisMany = howMany;
        } else {
            thisMany = Math.round(howMany);
            // window.alert("Jeez Einstein. No reason to make it difficult. I rounded " + howMany + " to " + thisMany +".\n You're welcome");
        };
  };


window.alert("OK, one password with " + thisMany + " characters comin' right up!\n Now I got some y/n questions for yous. That means you can type 'y' for 'yes' or 'n' for 'no.'");
// function charTypes(){
function incLA() {
    inclLower = window.prompt("Do you want some lowercase letters in that password? y/n")
if (inclLower == 'y'){
  inclLower = true;
  console.log("inclLower is " + inclLower);
  window.alert("lowercase letters. You got it!");
} else if (inclLower == 'n'){
  inclLower = false;
  console.log("inclLower is " + inclLower);
  window.alert("No lowercase letters. Odd choice, but whatever you say boss.");
} else {
  window.alert("It's 'yes' or 'no' pal. Type 'y' or 'n'.");
  incLA();
};
}; incLA();

function incUA() {
    inclUpper = window.prompt("Do you want some UPPERCASE letters in that password? y/n")
if (inclUpper == 'y'){
    inclUpper = true;
    console.log("inclUpper is " + inclUpper);
  window.alert("We'll throw some Uppercase letters in there!");
} else if (inclUpper == 'n'){
    inclUpper = false;
    console.log("inclUpper is " + inclUpper);
  window.alert("No Uppercase letters.");
} else {
  window.alert("It's 'yes' or 'no.' Are you drunk? Type 'y' or 'n'.");
  incUA();
};
}; incUA();

function incNumb() {
    inclNum = window.prompt("How about numbers? y/n")
if (inclNum == 'y'){
    inclNum = true;
    console.log("inclNum is " + inclNum);
  window.alert("Wit numbers. Done.");
} else if (inclNum == 'n'){
    inclNum = false;
    console.log("inclNum is " + inclNum);
  window.alert("No numbers.");
} else {
  window.alert("Alls I'm tryna do is get yer order. Sheesh! Type 'y' or 'n' !!!");
  incNumb();
};
}; incNumb();

function incSpeci() {
    inclSpecial = window.prompt("Now what about Special Characters? You know, the Tazmanian Devil kinda stuff. #%&?~^ and the like. You want special characters? y/n")
if (inclSpecial == 'y'){
    inclSpecial = true;
    console.log("inclSpecial is " + inclSpecial);
  window.alert("Spicy it is! Special characters are in.");
} else if (inclSpecial == 'n'){
    inclSpecial = false;
    console.log("inclSpecial is " + inclSpecial);
  window.alert("OK, we'll keep it plain. No special characters.");
} else {
  window.alert("&^%$! If you don't tell me what &%$#^*>; characters you want I'm gonna give you some special ^%#@%$# characters! Type 'y' or 'n' !!!");
  incSpeci();
};
}; incSpeci();
if (!inclLower && !inclUpper && !inclNum && !inclSpecial){
    window.alert("So you're tellin' me that you want a password with no lowercase letters, no uppercase letters, no numbers, and no special characters? Exactly HOW you want me to do that? Ain't nothin else to type!" );
    window.alert("Listen, I'll keep it simple for ya. You're getting a password with only lowercase letters.");
    inclLower = true;
    console.log("inclLower is " + inclLower);
};
var theseCharacters = [];
var youChose = [];
if (inclLower){
    theseCharacters.concat(lowerCase);
    youChose.push("lowercase Characters");
    };
if (inclUpper){
    theseCharacters.concat(upperCase);
    youChose.push("UPPERCASE Characters");
    };
if (inclNum){
    theseCharacters.concat(numberChars);
    youChose.push("Numbers");
    };
if (inclSpecial){
    theseCharacters.concat(specialCharacters);
    youChose.push("Special Characters");
    }

window.alert("One password with " + thisMany + " characters, including: " + JSON.stringify(youChose) + " coming right up.");
window.alert("the theseCharacters array looks like " + JSON.stringify(theseCharacters) );

function getMultipleRandom(arr, num) {
    const shuffled = [...arr].sort(() => 0.5 -Math.random());
    return shuffled.slice(0, num);
}
randoPick = getMultipleRandom(theseCharacters, thisMany);

window.alert("the pick is " + JSON.stringify(randoPick));

// }
// charTypes();
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
//     return passwordString
}