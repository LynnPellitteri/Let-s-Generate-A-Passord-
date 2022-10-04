
// Assignment code here
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
function writePassword() {
        var password = generatePassword();
        var passwordText = document.querySelector("#password");
      
        passwordText.value = password;
      }
  // Add event listener to generate button
generateBtn.addEventListener("click", writePassword);    
      
               

const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*", "-", "=", "+", "(", ")", "{", "}", "[", "]", "?", "/", ">", "<", ".", ",", "~", "|"];
const numberChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var password = " ";
length= " > 8 < 128";

 window.prompt("UpperCase click ok")

window.prompt("LowerCase click ok")

window.prompt("Special characters click ok")

window.prompt("Pasword length choose between 8-128 characters")

var length= ">  8 true"
                 "< 128 true"
                 "< 8 false"


                 
       
