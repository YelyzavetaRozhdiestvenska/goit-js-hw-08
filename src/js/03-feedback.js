import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

const formData = {};
feedbackFormState();

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('.feedback-form input'),
    textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputData, 500));

function onInputData(evt) {
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}


function onTextareaInput(evt) {
    const message = evt.currentTarget.value;
    localStorage.setItem(LOCAL_KEY, message);
}

function onFormSubmit(evt) {
    evt.preventDefault();
    const { email, message } = evt.currentTarget.elements;
    console.log({ email: email.value.trim(), message: message.value.trim() });
    
    if (localStorage.getItem(LOCAL_KEY)) {
        let data = JSON.parse(localStorage.getItem(LOCAL_KEY));
        console.log(data);
        localStorage.removeItem(LOCAL_KEY);
    }
        evt.target.reset();
        formData = {};
}

function feedbackFormState() {
   let data = localStorage.getItem(LOCAL_KEY);
   if (!data) return;
   formData = JSON.parse(data);
   refs.input.value = formData.email ?? '';
   refs.textarea.value = formData.message ?? '';
 }
    
