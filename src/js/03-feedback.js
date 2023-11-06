import throttle from 'lodash.throttle';
import { saveToLs, loadFromLs } from './helpers';
import { getRandomHexColor } from './helpers.js';

const refs = {
  formElem: document.querySelector('.feedback-form'),
  itemStyle: document.querySelector('a'),
  body: document.querySelector('body'),
};
const objectToLs = {};

refs.formElem.addEventListener('input', throttle(onFormInput, 500));
refs.formElem.addEventListener('submit', onFormSubmit);

onLoad('feedback-form-state');

function onFormInput(event) {
  const key = event.target.name;
  const value = event.target.value;
 
  objectToLs[key] = value;
  // key === 'email' ? (objectToLs.email = value) : (objectToLs.message = value);
  saveToLs('feedback-form-state', objectToLs);
}

function onLoad() {
  const savedData = loadFromLs('feedback-form-state');
  if (savedData !== null) {
    const name = savedData.email;
    const message = savedData.message;
    refs.formElem.elements.email.value = name || '';
    refs.formElem.elements.message.value = message || '';

    objectToLs.email = name || '';
    objectToLs.message = message || '';
  }
}

function onFormSubmit(event) {
  event.preventDefault();
  const email = refs.formElem.elements.email.value;
  const message = refs.formElem.elements.message.value;
  if (!email || !message) {
    alert('Форма не відправлена ​​введіть email та message'); return;
    // console.log('Форма не відправлена ​​введіть email та message'); return;
  } 
  const objectFromLs = {
    email,
    message,
  };
  console.log(" Форма відправлена :", objectFromLs);
  event.target.reset();
  localStorage.removeItem('feedback-form-state');  

  objectToLs.email = '';
  objectToLs.message = '';
}

// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
refs.body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;


// ************************************************
// *************Додатково**************************
// const btn = document.createElement("a");
// btn.textContent = "Натисніть для заповнення форми.";
// btn.classList.add("link");

// const addForm = () => {
//   const email = 'adverts@google.com';
//   const message = 'Thank you for not watching our advertising!';
//   const obj = {
//     email:email,
//     message:message,
//   }
//   refs.formElem.elements.email.value = email;
//   refs.formElem.elements.message.value = message;
//   localStorage.setItem('feedback-form-state', JSON.stringify(obj));
  
// }

// btn.addEventListener('click', addForm);
// refs.itemStyle.insertAdjacentElement('afterend', btn)

