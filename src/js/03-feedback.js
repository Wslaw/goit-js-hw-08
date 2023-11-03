// --------------Сonnecting styles---------------------------
const itemStyle = document.querySelector('a');
itemStyle.classList.add('link');
const body = document.querySelector('body');
body.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
body.style.transition = 'background-color 2s linear-out';

// form.style.margin = '200px 180px';
// ------------------------------------------------------------

const form = document.querySelector('form');
// const form = document.querySelector('.feedback-form');
const inputSave = input.addEventListener(
  "input[name='email'] { passive: true }"
);
console.log('PRIVET ORLAM');
console.log(inputSave);

localStorage.setItem();
localStorage.getItem();
localStorage.removeItem();

// В HTML есть разметка формы. Напиши скрипт который будет сохранять значения полей в локальное хранилище когда пользователь что-то печатает.

// <form class="feedback-form" autocomplete="off">
//   <label>
//     Email
//     <input type="email" name="email" autofocus />
//   </label>
//   <label>
//     Message
//     <textarea name="message" rows="8"></textarea>
//   </label>
//   <button type="submit">Submit</button>
// </form>

// Выполняй это задание в файлах 03-feedback.html и 03-feedback.js. Разбей его на несколько подзадач:

// Отслеживай на форме событие input, и каждый раз записывай в локальное хранилище объект с полями email и message,
//  в которых сохраняй текущие значения полей формы.Пусть ключом для хранилища будет строка "feedback-form-state".
// При загрузке страницы проверяй состояние хранилища, и если там есть сохраненные данные, заполняй ими поля формы.
// В противном случае поля должны быть пустыми.
// При сабмите формы очищай хранилище и поля формы, а также выводи объект с полями email, message и текущими их значениями в консоль.
// Сделай так, чтобы хранилище обновлялось не чаще чем раз в 500 миллисекунд. Для этого добавь в проект и используй
// библиотеку lodash.throttle.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
// --without red color - #00FFFF-------