const form = document.getElementById('contact-form');

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return e instanceof DOMException && (
      e.code === 22
            || e.code === 1014
            || e.name === 'QuotaExceededError'
            || e.name === 'NS_ERROR_DOM_QUOTA_REACHED')
            && (storage && storage.length !== 0);
  }
}

const checkLocalStorage = () => {
  if (storageAvailable('localStorage')) {
    // Save input values to local storage
    const setFormValues = () => {
      const dataForm = {
        name: form.input_name.value, 
        email: form._replyto.value,
        message: form.message.value,
      };

      localStorage.setItem('dataForm', JSON.stringify(dataForm));
    };

    form.input_name.addEventListener('change', setFormValues);
    form._replyto.addEventListener('change', setFormValues);
    form.message.addEventListener('change', setFormValues);

    // Retrieve Values from Local Storage
    let name = '';
    let email = '';
    let message = '';

    if (JSON.parse(localStorage.getItem('formData')) === null) {
      name = '';
      email = '';
      message = '';
    } else {
      ({ name, email, message } = JSON.parse(localStorage.getItem('dataForm')));
    }

    if (name !== '' || email !== '' || message !== '') {
      form.input_name.value = name;
      form._replyto.value = email;
      form.message.value = message;
    }
  }
};

window.onload = checkLocalStorage;
