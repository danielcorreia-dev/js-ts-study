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
    const validFields = this.isValid();
  }

  isValid() {
    let valid = true;

    for(let field of this.form.querySelectorAll('.validate')){
      if(!field.value) {
        this.createError(field, 'Field cannot be empty')
        valid = false;
      }
    }
  }

  createError(field, msg) {
    const div = document.createElement('div');
    div.innerHTML = msg;
    div.classList.add('error-text');
    field.insertAdjacentElement('afterend', div);
  }
}

const validate = new ValidateForm();
