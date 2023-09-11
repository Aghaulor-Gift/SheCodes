/*function signUp(event) {
  event.preventDefault();
  let input = document.querySelector("#email");
  console.log(input.value);
}
let form = document.querySelector("form");
form.addEventListener("submit", signUp);*/


//challenge 1
//challenge 1
let button = document.querySelector("#special-button");
button.addEventListener("click", clickMe);

function clickMe(event) {
  event.preventDefault();
  alert("Hooray!");
}

//challenge 2
let passwordForm = document.querySelector("#password-form");
passwordForm.addEventListener("submit", passwordInputValue);

function passwordInputValue(event) {
  event.preventDefault();
  let passwordInput = document.querySelector("#password-input");
  alert(`Your super secret password is ${passwordInput.value}`);
}

//challenge 3

let signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", showPassword);

function showPassword(event) {
  event.preventDefault();
  let emailInput = document.querySelector("#email-input");
  let usernameInput = document.querySelector("#username-input");
  alert(`Your super secret password is ${emailInput.value}`);
  alert(`Your super secret password is ${usernameInput.value}`);
}