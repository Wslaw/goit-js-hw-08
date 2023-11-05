import throttle from 'lodash.throttle';
import { saveToLs, loadFromLs } from './helpers';
import { getRandomHexColor } from './helpers.js';

const refs = {
  formElem: document.querySelector('.feedback-form'),
  itemStyle: document.querySelector('a'),
  body: document.querySelector('body'),
};

refs.formElem.addEventListener('input', throttle (onFormInput, 500));
refs.formElem.addEventListener('submit', onFormSubmit);

// onLoad();
const object = {};
function onFormInput(event) {
  const key = event.target.name;
  console.log(key);
  const value = event.target.value;
  console.log(value);
  if (key === 'email') {
    object.email = value;
  } else { object.message = value };
  
    saveToLs("feedback-form-state",  object );
}
function onLoad() {
  const name = loadFromLs('email');
  const message = loadFromLs('message');
  refs.formElem.elements.email.value = name || '';
  refs.formElem.elements.message.value = message || '';
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value;
  const obj = {
    email,
    message,
  };
  console.log(obj);
  event.target.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}

// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
