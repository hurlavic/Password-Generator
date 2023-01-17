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

//onclick handler to prompt user to choose password criteria
generate.addEventListener('click', () => {
    let length = prompt('How many characters would you like your password to contain?');

    //if user chooses a length less than 10 or greater than 64, alert user
    if (length < 10 || length > 64) {
        alert('Password length must be between 10 and 64 characters.');
    } else {
        let lowerCase = confirm('Click OK to confirm including lowercase characters.');
        let upperCase = confirm('Click OK to confirm including uppercase characters.');
        let numbers = confirm('Click OK to confirm including numeric characters.');
        let specialCharacters = confirm('Click OK to confirm including special characters.');

        //if user does not choose any criteria, alert user to choose at least one
        if (lowerCase === false && upperCase === false && numbers === false && specialCharacters === false) {
            alert('You must choose at least one character type.');
        }

        //if user chooses a length between 8 and 128, generate password
        if (length >= 8 && length <= 64) {
            let password = generatePassword(length, lowerCase, upperCase, numbers, specialCharacters);
            document.getElementById('password').innerHTML = password;
        }
    }
});