
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import {getRandomHexColor} from './helpers.js';

const videoCurrentTime = document.getElementById('vimeo-player');
const player = new Player(videoCurrentTime);


player.on('timeupdate', throttle(onTimeUpdate, 1000));

try {
  const savedTime = localStorage.getItem('videoCurrentTime');
  if (savedTime) {
    const parseSavedTime = JSON.parse(savedTime);
    player.setCurrentTime(parseSavedTime);
  }

  console.log('savedTime', savedTime);
} catch (error) {
  console.log('Сталась помилка');
}

function onTimeUpdate(currentTime) {
  localStorage.setItem('videoCurrentTime', JSON.stringify(currentTime.seconds));
};
// -------А це щоб не дуже гучно було при перевірці----------
player.setVolume(0.2);
// ---------------------------------------------------------  
// --------------Сonnecting styles---------------------------
  
const itemStyle = document.querySelector('a');
itemStyle.classList.add('link');
itemStyle.style.width = 'fit-content';
videoCurrentTime.parentNode.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
videoCurrentTime.parentNode.style.transition = 'background 2s linear';
videoCurrentTime.style.margin = '50px';
// ------------------------------------------------------------
