
// --------------Сonnecting styles---------------------------
const itemStyle = document.querySelector('a');
itemStyle.classList.add('link');
const body = document.querySelector('body');
body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
body.style.transition = 'background-color 2s linear-out';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
import '../css/common.css';
import '../css/03-feedback.css';
import { saveToLs, loadFromLs } from "./helpers";

const refs = {
  formElem: document.querySelector('.feedback-form'),  
};

refs.formElem.addEventListener('input', onFormInput);

function onFormInput(event) {
  const key = event.target.name;
  // console.log(key);
  const value = event.target.value;
  // console.log(value);
  saveToLs(key, value);
  
};
function onLoad() {
  const name = loadFromLs('name');
  const message = loadFromLs('message');
  // console.log(name);
  // console.log(message);
  // console.log(refs.formElem.elements);
  refs.formElem.elements.name.value = name;
  refs.formElem.elements.message.value = message;

};
onLoad();