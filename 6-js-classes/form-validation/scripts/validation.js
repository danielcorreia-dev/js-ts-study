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
  }

  isValid() {
    let valid = true;

    for (let errorText of this.form.querySelectorAll('.error-text')) {
      errorText.remove();
    }

    for (let field of this.form.querySelectorAll('.validate')) {
      const label = field.labels;

      if (!field.value)
        this.createError(field, `${label[0].innerText} cannot be empty`);
      valid = false;

      if (field.classList.contains('cpf')) {
        if (!this.validCPF(field)) valid = false;
      }
    }
  }

  validCPF(field) {
    const cpf = new ValidateCPF(field.value);

    if (!cpf.validate()) {
      this.createError(field, 'Invalid CPF');
      return false;
    }

    return true;
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = msg;
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidateForm();
