let form = document.querySelector('.sign-up-form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let user = document.querySelector('#name');
let confirmpass = document.querySelector('#Cpassword');
// User name pattern: Letters (capital or small) with a length of 6-12 characters
let userNamePattern = /^[A-Za-z]{6,12}$/;

// Password should be at least 8 characters, contain at least one lowercase, one uppercase letter, and one digit
let passwordPattern = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let passwordValue = password.value;
    let result = passwordPattern.test(passwordValue);

    let userName = user.value;
    let result1 = userNamePattern.test(userName);
    
    if (result1) {
        document.write("Username is valid");
    } else {
        document.write("Invalid user name. Please try again");
    }

    if (result) {
        document.write("Your password is strong");
    } else {
        document.write("Your password does not meet the criteria");
    }
    let confirmPasswordValue = confirmpass.value;

    if (confirmPasswordValue !== passwordValue) {
        document.write("Passwords do not match. Please try again");
        return;
    }
});

// Live feedback
user.addEventListener('keyup', (e) => {
    if (userNamePattern.test(e.target.value)) {
        user.setAttribute('class', 'success');
    } else {
        user.setAttribute('class', 'error');
    }
});
