// //////////////////////////////////////////////////////////////////////
// В завданні 2 домашньої роботи уважно читаємо ТЗ,                    //
// щоб правильно використати потрібні методи бібліотеки,               //
//  а саме метод on() з подією timeupdate і метод setCurrentTime()     //
//  для встановлення часу після перезавантаження сторінки.             //
// Також не забуваємо перевіряти наявність данних,                     //
// коли читаєте з localStorage. Якщо в localStorage немає ключа,       //
// який ви намагаєтесь прочитати, метод getItem(key) поверне вам null. //
// //////////////////////////////////////////////////////////////////////

// --------------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
// const throttle = require('lodash.throttle');

const videoCurrentTime = document.getElementById('vimeo-player');
const player = new Player(videoCurrentTime);
const onTimeUpdate = function (currentTime) {
  localStorage.setItem('videoCurrentTime', JSON.stringify(currentTime.seconds));
  //   console.log('<played the video!>', currentTime.seconds);
};

player.on('timeupdate', throttle(onTimeUpdate, 1000));
// -------А це щоб не дуже гучно було при перевірці----------
player.setVolume(0.3);
// ---------------------------------------------------------
try {
  const savedTime = localStorage.getItem('videoCurrentTime');
  if (savedTime || 0) {
    const parseSavedTime = JSON.parse(savedTime);
    player.setCurrentTime(parseSavedTime);
  }

  console.log('savedTime', savedTime);
} catch (error) {
  console.log('Сталась помилка');
}
// *********************************
videoCurrentTime.parentNode.style.background = `linear-gradient(to bottom, ${getRandomHexColor()}, ${getRandomHexColor()}, ${getRandomHexColor()})`;
videoCurrentTime.parentNode.style.transition = 'background 2s linear';

videoCurrentTime.style.margin = '200px 180px';
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
  // *********************************
}

// --------------Сonnecting styles---------------------------
// const link = document.querySelector('a');
// link.style.color = `${getRandomHexColor()}`;
const itemStyle = document.querySelector('a');
itemStyle.classList.add('link');
const itemStyleLink = document.querySelector('.link');
itemStyleLink.style.width = 'fit-content';

// ------------------------------------------------------------
