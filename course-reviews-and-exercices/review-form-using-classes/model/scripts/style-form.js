const inputs = document.querySelectorAll('.input-form');
const password = document.querySelector('#password');
const passwordToggle = document.querySelector('#toggle');

console.log(inputs);

const handleFocus = ({ target }) => {
  const span = target.nextElementSibling;
    span.style.opacity = 0;
};

const handleLoseFocus = ({ target }) => {
  const span = target.nextElementSibling;
  if(target.value) return;
  else span.style.opacity = 100;
};

const handleToggle = ({ target }) => {
  let className = target.getAttribute('class');

  if(className === 'bi bi-eye'){
    target.setAttribute('class', 'bi bi-eye-slash');
    password.setAttribute('type', 'text');
  } else {
    target.setAttribute('class', 'bi bi-eye');
    password.setAttribute('type', 'password');
  } 
};

inputs.forEach((input) => input.addEventListener('focus', handleFocus));
inputs.forEach((input) => input.addEventListener('focusout', handleLoseFocus));
passwordToggle.addEventListener('click', handleToggle);
