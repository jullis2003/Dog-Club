const contactForm = document.getElementById('contact-form');

function validation(form) {
  let result = true;
  const regularPhone = /^\+\d{12}$/;
  const formAgreed = document.querySelector('.form-agreed');
  const formCheckbox = formAgreed.querySelector('.form-checkbox');

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

  if (formCheckbox.dataset.required == 'true') {
    if (!formCheckbox.checked) {
      formAgreed.style.border = '1px solid var(--color-secondary-dark)';
    } else {
      formAgreed.style.border = 'none';
    }
  }

  return result;
}

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const submitData = document.querySelector('.submit-text');

  if (validation(this) == true) {
    submitData.textContent = 'The form has been tested successfully!';

    contactForm.reset();
  } else {
    submitData.textContent = '';
  }
});
