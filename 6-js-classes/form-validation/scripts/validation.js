class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form-data');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', (e) => {
      this.handleSubmit(e);
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const validField = this.isValid();
    const validPasswords = this.passwordAuthentication();

    if (validField && validPasswords) {
      alert('Form sent');
      this.form.submit();
    }
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validate')) {
      const label = field.labels;

      if (!field.value) {
        this.createError(field, `${label[0].innerText} cannot be empty`);
        valid = false;
      }

      if (field.classList.contains('cpf')) {
        if (!this.validCPF(field)) valid = false;
      }

      if (field.classList.contains('user')) {
        if (!this.validUser(field)) valid = false;
      }
    }

    return valid;
  }

  validCPF(field) {
    const cpf = new ValidateCPF(field.value);

    if (!cpf.validate()) {
      this.createError(field, 'Invalid CPF');
      return false;
    }

    return true;
  }

  validUser(field) {
    const user = field.value;
    let valid = true;

    if (user.length < 3 || user.length > 12) {
      this.createError(field, 'User needs to be between 3 and 12 characters');
      valid = false;
    }

    if (!user.match(/^[a-zA-Z0-9]+$/g)) {
      this.createError(field, 'Username needs to have only with letters');
      valid = false;
    }
    return valid;
  }

  passwordAuthentication() {
    let valid = true;

    const password1 = this.form.querySelector('.pass');
    const password2 = this.form.querySelector('.passconf');

    if (password1.value !== password2.value) {
      valid = false;
      this.createError(password1, 'The passwords are different');
      this.createError(password2, 'The passwords are different');
    }

    if (password1.value.length > 12 || password1.value.length < 6) {
      valid = false;
      this.createError(
        password1,
        'The password needs to be between 3 and 12 characters'
      );
    }
    return valid;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = msg;
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidateForm();
