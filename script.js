const name = document.getElementById('name');
const password = document.getElementById('password');
const form = document.getElementById("form");
const nameErrorElement = document.getElementById("name-error");
const passwordErrorElement = document.getElementById("password-error");

// form.addEventListener('submit', (event) => {
//     if (name.value === '' || name.value == null) nameErrorElement.innerText = "Name is required"; else nameErrorElement.innerText = null;
//     (password.value.length <= 6 || password.value.length > 20) ? passwordErrorElement.innerText = "Password must be longer than 6 characters and less than 20 characters" : passwordErrorElement = null;
//     if (password.value == 'password') passwordErrorElement.innerText = "Password cannot be password";
//     if (name.value === '' || name.value == null || name.value.length <= 0 || password.value.length <= 6 || password.value.length > 20) event.preventDefault();
// })