import throttle from 'lodash.throttle';
import { saveToLs, loadFromLs } from './helpers';
import { getRandomHexColor } from './helpers.js';

const refs = {
  formElem: document.querySelector('.feedback-form'),
  itemStyle: document.querySelector('a'),
  body: document.querySelector('body'),
};

refs.formElem.addEventListener('input', throttle(onFormInput, 500));
refs.formElem.addEventListener('submit', onFormSubmit);

onLoad('feedback-form-state');
const objectToLs = {};
function onFormInput(event) {
  const key = event.target.name;
  const value = event.target.value;
  if (key === 'email') {
    objectToLs.email = value;
  } else {
    objectToLs.message = value;
  }

  saveToLs('feedback-form-state', objectToLs);
}

function onLoad() {
  const savedData = loadFromLs('feedback-form-state');
  if (savedData !== null) {
    const name = savedData.email;
    const message = savedData.message;
    refs.formElem.elements.email.value = name || '';
    refs.formElem.elements.message.value = message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value;
  const objectFromLs = {
    email,
    message,
  };
  console.log('objectFromLs', objectFromLs);
  event.target.reset();
  // console.log('REMOve-', event.target);
  localStorage.removeItem('feedback-form-state');
  // localStorage.removeItem('message');
}

// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
