const formData = {
    email: '',
    message: '',
}
function saveToLS(key, value) {
    const jsonData = JSON.stringify(value);
    localStorage.setItem(key, jsonData);

}
function loadFromLS(key) {
    const json = localStorage.getItem(key);
    try {
        const data = JSON.parse(json);
        return data;

    }
    catch {
        return json;
    }
}

const form = document.querySelector('.feedback-form');

form.addEventListener('input', () => {
  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
    };
    saveToLS('feedback-form-state', formData);

})

window.addEventListener('DOMContentLoaded', () => {
    const data = loadFromLS('feedback-form-state');
    if (data) {
        form.elements.email.value = data.email || '';
        form.elements.message.value = data.message || '';
        formData.email = data.email || '';
        formData.message = data.message || '';
    }
})

form.addEventListener('submit', e => {
    e.preventDefault();
   const formData = {
        email: form.elements.email.value.trim(),
        message: form.elements.message.value.trim(),
    };

    if (formData.email === '' || formData.message === '') {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    form.reset();
    localStorage.removeItem('feedback-form-state');

})