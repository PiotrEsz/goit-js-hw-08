import throttle from 'lodash.throttle';

const KEY_LOCAL_STORAGE = 'feedback-form-state';
const form = document.querySelector('form.feedback-form');
const EmailInputDefault = document.querySelector('input[type="email"]');
const MessageInputDeafult = document.querySelector('textarea[name="message"]');
let emailStorage;
let messageStorage;

function setLocalStorage(value) {
  try {
    const valueToSave = JSON.stringify(value);
    localStorage.setItem(KEY_LOCAL_STORAGE, valueToSave);
  } catch (error) {
    console.error('Set state error:', error.message);
  }
}

function getLocalStorage(key) {
  try {
    const valueSaved = localStorage.getItem(key);
    return valueSaved === null ? undefined : JSON.parse(valueSaved);
  } catch (error) {
    console.error('Get state error', error.message);
  }
}
if (getLocalStorage(KEY_LOCAL_STORAGE) !== undefined) {
  emailStorage = getLocalStorage(KEY_LOCAL_STORAGE).email;
  messageStorage = getLocalStorage(KEY_LOCAL_STORAGE).message;

  if (!!emailStorage) {
    EmailInputDefault.value = emailStorage;
  }
  if (!!messageStorage) {
    MessageInputDeafult.value = messageStorage;
  }
}
function valueHandler() {
  const dataToSave = {
    email: EmailInputDefault.value,
    message: MessageInputDeafult.value,
  };

  setLocalStorage(dataToSave);
  emailStorage = dataToSave.email;
  messageStorage = dataToSave.message;
}

function formSubmit(event) {
  event.preventDefault();
  event.currentTarget.reset();
  //localStorage.removeItem(KEY_LOCAL_STORAGE);
  console.log(
    `to jest mail: ${emailStorage}, \nto jest wiadomość: ${messageStorage}, \nobiekt: ${localStorage.getItem(
      KEY_LOCAL_STORAGE
    )} `
  );
  localStorage.clear();
}

form.addEventListener('input', throttle(valueHandler, 500));
form.addEventListener('submit', formSubmit);
