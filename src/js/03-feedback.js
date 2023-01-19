'use strict';
import throttle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'feedback-form-state';
const form = document.querySelector('form');
const currentData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

window.addEventListener('load', fillForm());

form.addEventListener(
  'input',
  throttle(() => {
    const { email, message } = form.elements;
    let inputedData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputedData));
  }, 500)
);

function fillForm() {
  if (currentData) {
    Array.from(form.elements).forEach(el => {
      if (el.name === 'email') {
        el.value = currentData.email;
      }
      if (el.name === 'message') {
        el.value = currentData.message;
      }
    });
  }
}
form.addEventListener('submit', e => {
  e.preventDefault();
  console.log(currentData);
  localStorage.clear();
  form.reset();
});
