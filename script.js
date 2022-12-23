
var generateBtn = document.querySelector("#generate");
// will start the function to writing the password when called 
function writePassword() {

// adding strings of all possible characters for password generation.  separated out by type of character
const symbolsString =  " !#$%&'()*+,-./:;<=>?@[]^_`{|}~"
const digitsString = "1234567890";
const lowerString = "abcdefghijklmnopqrstuvwxyz";
const upperString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

//because i used strings for my character variables, now i need to use the split function to turn these strings into arrays
let symbolsArray = symbolsString.split("");
let digitsArray = digitsString.split("");
let lowerArray = lowerString.split("");
let upperArray = upperString.split("");

    
// this is where we ask for the users input.  
let passwordArray = [];
let confirmLength = prompt("how many characters would you like your password to contain? Please enter a number from 8-128.")
// since it is possible for the user to enter a number outside of the usable range, 8-128, and possible for the user to 
// enter other text, we need to confirm they enter a number within that range.  if they do NOT follow those parameters,
// we start over with the write password function on line 4, which then brings us back to the first prompt on line 21
if (confirmLength < 8 || confirmLength > 128 || isNaN(confirmLength)) {
  alert("please enter a value from 8-128") 
  return writePassword()
};
let confirmSymbols = confirm("Click OK if you want to include symbols, otherwise click cancel");
let confirmDigits = confirm("Click OK if you want to include numbers/digits, otherwise click cancel")
let confirmLower = confirm("Click OK if you want to include lowercase letters , otherwise click cancel");
let confirmUpper = confirm("Click OK if you want to include uppercase letters, otherwise click cancel");

//the following section of code takes the input from the user and adds the array for the type of the characters in question 
// if the user chose to incorporate them into their password or not
if (confirmSymbols === true){
  passwordArray = passwordArray.concat(symbolsArray)};
  if (confirmDigits === true){
    passwordArray = passwordArray.concat(digitsArray)};
if (confirmLower === true){
passwordArray = passwordArray.concat(lowerArray)};
if (confirmUpper === true){
passwordArray = passwordArray.concat(upperArray)};
  
// used the log to check that the entered password length was returning properly
console.log("password length is : " + confirmLength);

//here we establish a new variable that is equal to the input chosen by the suer
let passwordLength = confirmLength;

//create function to randomize password using math.random.  
function randomPassword (){
  let generatedPassword = [];
  // this for loop takes the index for the password as long as it is less than the length of the password, and gets a random number
  // that then will correspond to an index of the password array that we set up starting on line 36.
  for (let i = 0; i < passwordLength; i++) {
    let randomNumber = Math.floor(Math.random()*passwordArray.length)
    generatedPassword += passwordArray[randomNumber]
  }
  //returning the generated password array here
  return generatedPassword;
}
randomPassword();
let password = randomPassword();
return password;
}

//this console.log is returning the text from the HTML document, NOT the password array
let finalPassword = writePassword();
console.log(finalPassword);
// this final section allows us to input the generated password into the displayfield on the html page
  let passwordText = document.querySelector("#password");
    
  passwordText.value = finalPassword;
  


// Add event listener to generate button which then starts the write password function
generateBtn.addEventListener("click", writePassword);