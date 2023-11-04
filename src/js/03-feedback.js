

import '../css/common.css';
import '../css/03-feedback.css';
import { saveToLs, loadFromLs } from './helpers';

const refs = {
  formElem: document.querySelector('.feedback-form'),
  itemStyle: document.querySelector('a'),
  body: document.querySelector('body'),  
};

refs.formElem.addEventListener('input', onFormInput);
refs.formElem.addEventListener('submit', onFormSubmit);

onLoad();

function onFormInput(event) {
  const key = event.target.name;
  const value = event.target.value;
  // console.log(key);
  // console.log(value);
  saveToLs(key, value);
}
function onLoad() {
  const name = loadFromLs('email');
  const message = loadFromLs('message');
  // console.log(name);
  // console.log(message);
  refs.formElem.elements.email.value = name || '';
  refs.formElem.elements.message.value = message || '';
}

function onFormSubmit(e) {
  e.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value;
  const obj = {
    email,
    message,
  };
  console.log(obj);
  e.target.reset();
  localStorage.removeItem('email');
  localStorage.removeItem('message');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
refs.body.style.transition = 'background-color 2s linear-out';