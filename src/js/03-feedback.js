'use strict';

import throttle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'feedback-form-state';
const feedbackForm = document.querySelector('form');
const currentData = JSON.parse(localStorage.getItem(KEY_LOCAL_STORAGE));

window.addEventListener('load', contactForm());

feedbackForm.addEventListener(
  'input',
  throttle(() => {
    const { email, message } = feedbackForm.elements;
    let inputedData = {
      email: email.value,
      message: message.value,
    };
    localStorage.setItem(KEY_LOCAL_STORAGE, JSON.stringify(inputedData));
  }, 500)
);

function contactForm() {
  if (currentData) {
    Array.from(feedbackForm.elements).forEach(el => {
      if (el.name === 'email') {
        el.value = currentData.email;
      }
      if (el.name === 'message') {
        el.value = currentData.message;
      }
    });
  }
}
feedbackForm.addEventListener('submit', e => {
  e.preventDefault();
  console.log(currentData);
  localStorage.clear();
  feedbackForm.reset();
});
