import throttle from 'lodash.throttle';

const LOCAL_KEY = 'feedback-form-state';

let formData = {};
feedbackFormState();

const refs = {
    form: document.querySelector('.feedback-form'),
    input: document.querySelector('input[name="email"]'),
    textarea: document.querySelector('textarea[name="message"]'),
};

refs.form.addEventListener('submit', onFormSubmit);
refs.form.addEventListener('input', throttle(onInputData, 500));

function onInputData(evt) {
    formData = { email: refs.input.value.trim(), message: refs.textarea.value.trim() };
    formData[evt.target.name] = evt.target.value.trim();
    localStorage.setItem(LOCAL_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    
    
    if (refs.input.value === '' || refs.textarea.value === '') {
    return alert('Please fill in all the fields!');
  }

   
    evt.target.reset();
    localStorage.removeItem(LOCAL_KEY);
        formData = {};
}
console.log(localStorage.getItem(LOCAL_KEY));
function feedbackFormState() {
    let data = localStorage.getItem(LOCAL_KEY);
    console.log(data);
    if (data) {
        formData = JSON.parse(data);
        console.log(data);
        
    }
 }
    
