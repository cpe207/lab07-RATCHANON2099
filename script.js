//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

const firstNameInput = document.querySelector("#first-name-input");
const lastNameInput = document.querySelector("#last-name-input");
const emailInput = document.querySelector("#email-input");
const passWordInput = document.querySelector("#password-input");
const submitBtn = document.querySelector("#submit-btn");

firstNameInput.onkeyup = () => {
  firstNameInput.classList.remove("is-valid");
  firstNameInput.classList.remove("is-invalid");
};

lastNameInput.onkeyup = () => {
  lastNameInput.classList.remove("is-valid");
  lastNameInput.classList.remove("is-invalid");
};

passWordInput.onkeyup = () => {
  passWordInput.classList.remove("is-valid");
  passWordInput.classList.remove("is-invalid");
};

emailInput.onkeyup = () => {
  emailInput.classList.remove("is-valid");
  emailInput.classList.remove("is-invalid");
};

submitBtn.onclick = () => {
  isFirstNameok = false;
  isLastNameok = false;
  isEmailok = false;
  isPasswordok = false;

  if (firstNameInput.value === "") {
    firstNameInput.classList.add("is-invalid");
  } else {
    firstNameInput.classList.add("is-valid");
    isFirstNameok = true;
  }

  if (lastNameInput.value === "") {
    lastNameInput.classList.add("is-invalid");
  } else {
    lastNameInput.classList.add("is-valid");
    isLastNameok = true;
  }

  if (emailInput.value === "") {
    emailInput.classList.add("is-invalid");
  } else if (validateEmail(emailInput.value) === true) {
    emailInput.classList.add("is-valid");
    isEmailok = true;
  } else if (validateEmail(emailInput.value) === false) {
    emailInput.classList.add("is-invalid");
  }

  if (passWordInput.value === "") {
    passWordInput.classList.add("is-invalid");
  } else if (passWordInput.value.length < 6) {
    passWordInput.classList.add("is-invalid");
  } else {
    passWordInput.classList.add("is-valid");
    isPasswordok = true;
  }

  if (isFirstNameok && isLastNameok && isEmailok && isPasswordok) {
    alert("Registered successfully");
  }
};
