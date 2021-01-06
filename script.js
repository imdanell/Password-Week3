// Assignment Code
var generateBtn = document.querySelector("#generate");
// Write password to the #password input
var password = (' ');

function writePassword() {
  generatePassword();
  var passwordText = document.querySelector("#password");
  // var length = prompt("Please enter length between 8 and 128");
  passwordText.value = password;
};
//
// for(let i = array.length — 1; i > 0; i--){
//   const j = Math.floor(Math.random() * i)
//   const temp = array[i]
//   array[i] = array[j]
//   array[j] = temp
// }

function generatePassword() {
  var fullarray = []
  var upperArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var lowerArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
  var numbersA = ['1','2','3','4','5','6','7','8','9','0']
  var specialChar = ['!','@','#','$','%','&','?','*','^','.']
 
  var length = prompt("Enter length of password between 8 and 128");
    while (length < 8 || length > 128){
      var length = prompt("Length outside range, please enter length between 8 and 128");
    }
    // var upper=('A')
    var upper = confirm("Would you like upper case in password?");
    var lower = confirm("Would you like lower case in password?");
    var numbers = confirm("Would you like numbers in password?");
    var special = confirm("Would you like special characters in password?"); 
    // x.push(...y);

      if (upper) {fullarray.push(...upperArray)
      }
      if (lower) {fullarray.push(...lowerArray)
      }
      if (numbers) {fullarray.push(...numbersA)
      }
      if (special) {fullarray.push(...specialChar)
      }
// var finalPassword = ""

// console.log(array);
for (i = 0; i < (length-1); i++) {    
  var charPick = Math.floor(Math.random() * (fullarray.length-1));
  var pwdBuild = fullarray[charPick];
  password = password + pwdBuild;
};
    //for loop 8-128 named length
    //inside put shuffle function
    //empty string variable
    // push to take first item of shuffled array to empty string (finalPassword.push(array[0]))
    //return the string variable name
};
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);