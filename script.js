// Add all variables for the project

var characterLength = 8;
var choiceArr = []; // Changed variable name to "choiceArr"

var specialChar = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '{', '}', '|', '/'];
var lowerCaseArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

// Assignment code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the password Input
function writePassword() {
    var correctPrompts = getPrompts(); // either true or false // <--Creates var that executes the function getPrompts when called
    var passwordText = document.querySelector("#password");

    if (correctPrompts) {
        var newPassword = generatePassword();
        passwordText.value = newPassword;
    } else {
        passwordText.value = "";
    }
}

function generatePassword() {
    // I would generate password based on the prompts
    var password = "";
    for (var i = 0; i < characterLength; i++) {
        var randomIndex = Math.floor(Math.random() * choiceArr.length);
        password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
    choiceArr = []; // Clear the choiceArr to start fresh

    characterLength = parseInt(prompt("How many characters do you want password to be? (8-128 characters)"));

    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character Length incorrect. Please Try Again");
        return false;
    }

    // confirm - used to display a dialog box w/ option and two buttons
    if (confirm("Would you like lowercase?")) {
        choiceArr = choiceArr.concat(lowerCaseArr); // Use choiceArr
    }
    if (confirm("Would you like uppercase?")) {
        choiceArr = choiceArr.concat(upperCaseArr); // Use choiceArr
    }
    if (confirm("Would you like special characters?")) {
        choiceArr = choiceArr.concat(specialChar); // Use choiceArr
    }
    if (confirm("Would you like numbers?")) {
        choiceArr = choiceArr.concat(numbers); // Use choiceArr
    }
    // Function will stop if function is TRUE
    return true;
}
