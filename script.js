// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function writePassword() {

const symbolsString =  " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const digitsString = "1234567890";
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let symbolsArray = symbolsString.split("");
let digitsArray = digitsString.split("");
let lowerArray = lowerString.split("");
let upperArray = upperString.split("");

    

let passwordArray = [];
let confirmLength = prompt("how many characters would you like your password to contain? Please enter a number from 8-128.")
if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
  alert("please enter a value from 8-128") 
  return writePassword()
};
let confirmSymbols = confirm("Click OK if you want to include symbols, otherwise click cancel");
let confirmDigits = confirm("Click OK if you want to include numbers/digits, otherwise click cancel")
let confirmLower = confirm("Click OK if you want to include lowercase letters , otherwise click cancel");
let confirmUpper = confirm("Click OK if you want to include uppercase letters, otherwise click cancel");


if (confirmSymbols === true){
  passwordArray = passwordArray.concat(symbolsArray)};
  if (confirmDigits === true){
    passwordArray = passwordArray.concat(digitsArray)};
if (confirmLower === true){
passwordArray = passwordArray.concat(lowerArray)};
if (confirmUpper === true){
passwordArray = passwordArray.concat(upperArray)};
  
// console.log(passwordArray);
console.log("password length is : " + confirmLength);


// use math.random to generate password string (taken from rock paper scissors game... may need to retool this code)
let passwordLength = confirmLength;

//create function to randomize password 
function randomPassword (){
  let generatedPassword = [];
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()*passwordArray.length)
    generatedPassword += passwordArray[randomNumber]
  }
  return generatedPassword;
}
randomPassword();
let password = randomPassword();
return password;
}

//this console.log is returning the text from the HTML document, NOT the password array
let finalPassword = writePassword();
console.log(finalPassword);
  let passwordText = document.querySelector("#password");
    
  passwordText.value = finalPassword;
  


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);