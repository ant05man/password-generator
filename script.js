var characterLength = 8;
var choiceArr = [];

var specialCharArr = ['!','@','#','$','$','%','^','&','*','(',')','{','}','|','/'];
var lowerCaseArr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCaseArr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numberArr = ['1','2','3','4','5','6','7','8','9','0'];


// Assignment code
var generateBtn = document.querySelector("#generate")

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Write password to the password Input
function writePassword() {
    var correctPrompts = getPrompts(); // either true or false
    if (correctPrompts) {
    var password = generatePassword();
    var passwordTest = document.querySelector("#password");

    password.Text.value = password;
    }
}

function generatePassword() {
//I would generate password based on the prompts
var password = "";
for (var i=0; i < characterLength; i++) {
    var randomIndez = (Math.random() * choiceArr.length);
    password = password + choiceArr[randomIndex];
    }
    return password;
}

function getPrompts() {
    characterLength = parseIntprompt("How many characters do you want password to be?(8-128 characters")
    if (isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
        alert("Character Length incorrect. Please Try Again");
        return false;
    }

    if (confirm("Would you like lowerCase?")) {
        choiceArr = choiceArr.concat(lowerCaseArr);
    }
    if (confirm("Would you like upperCase?")) {
        choiceArr = choiceArr.concat(upperCaseArr);
    }
    if (confirm("Would you like special characters?")) {
        choiceArr = choiceArr.concat(specialCharArr);
    }
    if (confirm("Would you like numbers?")) {
        choiceArr = choiceArr.concat(numberArr);
}
}