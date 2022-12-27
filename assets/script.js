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
var upperCase =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specialCharacters = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '+', '-', '.', '~', '|', '<', '>', '=', '-', '_', '/', ':', ';', '?', '[', ']', '{', '}', '~'];
var inclLower;
var inclUpper;
var inclNum;
var inclSpecial;

var theseCharacters = [];
var youChose = [];

//this function randomly picks variables out of the bucket for an array at some array.length
function pickEm(arr, num){
  var answer = [];
  for (var i = 0; i < num; i++){
      answer.push(arr[Math.floor(Math.random()*arr.length)]);
      // console.log(answer);
  };
//  console.log(answer);
 return answer
};

//this function verifies that elements from array1 "arr1" are in "arr2", making sure password includes lowerCase, upperCase, etc.
function checkEm(arr1, arr2){
  var pass = false;
  for (var i = 0; i < arr1.length; i++){
    if(arr2.includes(arr1[i])){
      // console.log("found character from " + arr1 + " in " + arr2 + " in " + (i + 1) + "tries!" );
      pass = true;
      break
    }else{
      continue
    }
  }
  if (pass === false){
    console.log("failed to find " + arr1 + " in " + arr2)
    pickAndCheck(); //calls pickEm() and runs through checkEm() again
  };
};

// checkEm test
// var testArray = ['#', 'A', 'g', 'd', 'X', 'o', 'G', '~', '@', '%'];
// checkEm(testArray, numberChars);
// checkEm(testArray, specialCharacters);
// checkEm(testArray, lowerCase);
// checkEm(testArray, upperCase);

//pickAndCheck() picks random characters with pickEm(), then checks that each selected character group is represented with checkEm(). If any of the checkEm's fail, checkEm() will start pickAndCheck() over again and pick a new answer.
function pickAndCheck() {
  answer = pickEm(theseCharacters, thisMany);
  
  if (inclLower){
    checkEm(answer, lowerCase);
  };
  if (inclUpper){
    checkEm(answer, upperCase);
  };
  if (inclNum){
    checkEm(answer, numberChars);
  };
  if (inclSpecial){
    checkEm(answer, specialCharacters);
  };
  // console.log("all good in the hood!");
  return answer
};

var thisMany = 0; //reset before user input

function generatePassword() {
  //must return a string value that is the password
  //user is prompted for pw length between 8 and 128
// thisMany = 0; 

function askHowMany(){
var howMany = window.prompt("I'll help you make up a gobbledygook password.\nHow many characters do you want?\nPick a number between 8 and 128.");
console.log(howMany) 
if (isNaN(howMany)){
  window.alert("Listen smarty-pants, when I ask for a number between 8 and 128 I mean that I want a NUMBER (8,9,10,11...) between 8 and 128.\n Try again.");
  askHowMany();
} else {
  if (howMany < 8 || howMany > 128){
    window.alert("OK, I'm gonna say this again real slow. I want a number BIGGER than 8, but SMALLER than 128. There are at least 121 correct answers if you include the 8 and the 128, which I do.\nPick one.");
    askHowMany();
} else {
  var thatMany = (howMany)/1
  if (Number.isInteger(thatMany)){
            // console.log("howMany an int? " + Number.isInteger(thatMany))
            thisMany = thatMany;
            console.log(thisMany);
            return thisMany;
        } else {  
          thisMany = Math.round(howMany);
          console.log(thisMany);
          window.alert("Jeez Einstein. No reason to make it difficult. I rounded " + howMany + " to " + thisMany +".\nYou're welcome.");
          return thisMany;
        };
    };
  };
};

askHowMany();
console.log(thisMany);

window.alert("OK, one password with " + thisMany + " characters. No problem.\nBut first I got some y/n questions for yous. That means you can type 'y' for 'yes' or 'n' for 'no.'");
// these functions prompt the user for what kind of characters they want to include
//they also offer unique insults to the user if the user doesn't give the correct input, and then start over.
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
//if the user chooses none of the available variable types, this insults the user and includes only lowercase letters
if (!inclLower && !inclUpper && !inclNum && !inclSpecial){
    window.alert("So you're tellin' me that you want a password with no lowercase letters, no uppercase letters, no numbers, and no special characters? Exactly HOW you want me to do that? Ain't nothin else to type!" );
    window.alert("Listen, I'll keep it simple for ya. You're getting a password with only lowercase letters.");
    inclLower = true;
    console.log("inclLower is " + inclLower);
};
//builds the bucket of characters to choose from

theseCharacters = []; //resets these arrays
youChose = [];

if (inclLower){
    theseCharacters = theseCharacters.concat(lowerCase);
    youChose.push("lowercase Characters");
    // console.log(theseCharacters);
    };
if (inclUpper){
    theseCharacters = theseCharacters.concat(upperCase);
    youChose.push("UPPERCASE Characters");
    // console.log(theseCharacters);
    };
if (inclNum){
    theseCharacters = theseCharacters.concat(numberChars);
    youChose.push("Numbers");
    // console.log(theseCharacters);
    };
if (inclSpecial){
    theseCharacters = theseCharacters.concat(specialCharacters);
    youChose.push("Special Characters");
    // console.log(theseCharacters);
    };

window.alert("One password with " + thisMany + " characters, including: " + JSON.stringify(youChose) + " coming right up.");
// window.alert("the theseCharacters array looks like " + JSON.stringify(theseCharacters) );

stringThis = pickAndCheck();
// console.log(stringThis);

//makes array into a string
passwordString = stringThis.join('');
window.alert("Allright you goofy " + passwordString + ", your password will be in that text field where you can copy it easily. Click OK and get the " + passwordString + " outa here. NEXT CUSTOMER!");
return passwordString
}; //end of generatePassword() function