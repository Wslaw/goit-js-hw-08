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

const vPlayer = document.getElementById('vimeo-player');
const player = new Player(vPlayer);
const onPlay = function (currentTime) {
localStorage.setItem(vPlayer,currentTime.seconds)
  console.log('<played the video!>', currentTime.seconds);
  console.log('timeupdate:', timeupdate);
};

player.on('timeupdate', onPlay);


// const currentTime = player.getCurrentTime();
// console.log(onPlay);


