function validation(form) {
  let result = true;
  const regularPhone = /^\+\d{12}$/;

  function createError(input, text) {
    const parent = input.parentNode;
    const errorText = document.createElement('p');

    parent.classList.add('error');
    errorText.classList.add('error-text');
    errorText.textContent = text;

    parent.append(errorText);
  }

  function removeError(input) {
    const parent = input.parentNode;

    if (parent.classList.contains('error')) {
      parent.querySelector('.error-text').remove();

      parent.classList.remove('error');
    }
  }

  function validatePhone(regular, input) {
    return regular.test(input);
  }

  form.querySelectorAll('.input-control').forEach(input => {
    removeError(input);

    if (input.dataset.required == 'true') {
      if (input.value == '') {
        removeError(input);
        createError(input, "The field isn't filled!");

        result = false;
      }
    }

    if (input.dataset.pattern) {
      if (!validatePhone(regularPhone, input.value)) {
        removeError(input);
        createError(input, 'Phone format: +************');

        result = false;
      }
    }
  });

  return result;
}

document
  .getElementById('contact-form')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    if (validation(this) == true) {
      alert('The form has been tested successfully!');
    }
  });
