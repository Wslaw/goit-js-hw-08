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
 
  key === 'email' ? (objectToLs.email = value) : (objectToLs.message = value);
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
  if (!email || !message) {
    // alert('Форма не відправлена ​​введіть email та message');
    console.log('Форма не відправлена ​​введіть email та message'); return;
  } 
  const objectFromLs = {
    email,
    message,
  };
  console.log("То є об'єкт з полями email, message та поточними їх значеннями:\n\n Форма відправлена :", objectFromLs);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');  
}

// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;


// ************************************************
// *************Додатково**************************
const btn = document.createElement("a");
btn.textContent = "Натисніть для заповнення форми.";
btn.classList.add("link");

const addForm = () => {
  const em = 'adverts@google.com';
  const mes = 'Thank you for not watching our advertising!';
  const obj = {
    email:em,
    message:mes,
  }
  refs.formElem.elements.email.value = em;
  refs.formElem.elements.message.value = mes;
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  
}

btn.addEventListener('click', addForm);
refs.itemStyle.insertAdjacentElement('afterend', btn)

