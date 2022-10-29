// Icons
const nameIcon = document.querySelector('#name-icon');
const LastNameIcon = document.querySelector('#lastname-icon');
const userIcon = document.querySelector('#user-icon');
const passIcon = document.querySelector('#pass-icon');
const confirmPass = document.querySelector('#confirmPass');
const cpfIcon = document.querySelector('#cpf-icon');

// Inputs
const registerForm = document.querySelector('.form-container');
const userInput = document.querySelector('#user');
const passInput = document.querySelector('#password');
const checkBoxPass = document.querySelector('#show-pass');

// Events
registerForm.addEventListener('click', (evnt) => {
  let elem = evnt.target;

  // User
  if (
    elem.contains(document.activeElement) &&
    elem.classList.contains('user')
  ) {
    userIcon.style.setProperty('color', 'var(--main-color)');
  } else {
    userIcon.style.color = '';
  }

  // Password
  if (
    elem.contains(document.activeElement) &&
    elem.classList.contains('pass')
  ) {
    passIcon.style.setProperty('color', 'var(--main-color)');
  } else {
    passIcon.style.color = '';
  }

  // Password Confirm
  if (
    elem.contains(document.activeElement) &&
    elem.classList.contains('passconf')
  ) {
    confirmPass.style.setProperty('color', 'var(--main-color)');
  } else {
    confirmPass.style.color = '';
  }

  // Name
  if (
    elem.contains(document.activeElement) &&
    elem.classList.contains('name')
  ) {
    nameIcon.style.setProperty('color', 'var(--main-color)');
  } else {
    nameIcon.style.color = '';
  }

  // Last name
  if (
    elem.contains(document.activeElement) &&
    elem.classList.contains('lastname')
  ) {
    LastNameIcon.style.setProperty('color', 'var(--main-color)');
  } else {
    LastNameIcon.style.color = '';
  }

  // CPF
  if (elem.contains(document.activeElement) && elem.classList.contains('cpf')) {
    cpfIcon.style.setProperty('color', 'var(--main-color)');
  } else {
    cpfIcon.style.color = '';
  }
});

// See password
checkBoxPass.addEventListener('change', e => {
  if(e.target.checked){
    passInput.setAttribute('type', 'text');
  } else {
    passInput.setAttribute('type', 'password');
  }
});