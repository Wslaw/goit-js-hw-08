// //////////////////////////////////////////////////////////////////////
// Если вы уверены, что у вас нет сенсорного экрана и событие 
// touchstart не используется в вашем коде, но предупреждение 
// все равно появляется, возможно, оно связано с каким - то внешним
//  кодом или библиотекой, которая использует touchstart.
//
// //////////////////////////////////////////////////////////////////////

// --------------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const videoCurrentTime = document.getElementById('vimeo-player');
const player = new Player(videoCurrentTime);


player.on('timeupdate', throttle(onTimeUpdate, 1000));

// -------А це щоб не дуже гучно було при перевірці----------
player.setVolume(0.2);
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

function onTimeUpdate(currentTime) {
  localStorage.setItem('videoCurrentTime', JSON.stringify(currentTime.seconds));
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
    // *********************************
  }
  
  // --------------Сonnecting styles---------------------------
const itemStyle = document.querySelector('a');
itemStyle.classList.add('link');
itemStyle.style.width = 'fit-content';
videoCurrentTime.parentNode.style.background = `linear-gradient(to right, ${getRandomHexColor()}, ${getRandomHexColor()})`;
videoCurrentTime.parentNode.style.transition = 'background 2s linear';
videoCurrentTime.style.margin = '100px 100px';
// ------------------------------------------------------------
