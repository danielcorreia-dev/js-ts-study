class ValidateForm {
  constructor() {
    this.form = document.querySelector('.form-data');
    this.events();
  }

  events() {
    this.form.addEventListener('submit', evnt => {
      this.handleSubmit(evnt);
    })
  }

  handleSubmit(e) {
    e.preventDefault();

    const validFields = this.isValid();
    const validPasswords = this.passAuth();

    if(validFields && validPasswords) {
      alert('Form sent');
      this.form.submit();
    }
  }

  isValid() {
    let valid = true;

    for(const field of this.form.querySelectorAll('.validation')) {
      const label = field.labels;

      if(!field.value) {
      }
    }
    return valid;
  }

  createError(field, message) {
    const div = document.createElement('div');
    div.classList.add('error-text');
    div.innerHTML = message;
    field.insertAdjacentElement('afterend', div);
  }
}

 const validation = new ValidateForm();