const password = document.getElementById('password');
const generate = document.getElementById('generate');

//function to generate password
function generatePassword(length, lowerCase, upperCase, numbers, specialCharacters) {
    let password = '';
    let possibleCharacters = '';

    //if user chooses lowercase, add lowercase characters to possibleCharacters
    if (lowerCase === true) {
        possibleCharacters += 'abcdefghijklmnopqrstuvwxyz';
    }

    //if user chooses uppercase, add uppercase characters to possibleCharacters
    if (upperCase === true) {
        possibleCharacters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    //if user chooses numbers, add numbers to possibleCharacters
    if (numbers === true) {
        possibleCharacters += '0123456789';
    }

    //if user chooses special characters, add special characters to possibleCharacters
    if (specialCharacters === true) {
        possibleCharacters += '!@#$%^&*()_+~`|}{[]\:;?><,./-=';
    }

    //for loop to generate password
    for (let i = 0; i < length; i++) {
        password += possibleCharacters.charAt(Math.floor(Math.random() * possibleCharacters.length));
    }

    return password;
}

