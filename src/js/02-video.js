// //////////////////////////////////////////////////////////////////////
// В завданні 2 домашньої роботи уважно читаємо ТЗ,                    //
// щоб правильно використати потрібні методи бібліотеки,               //
//  а саме метод on() з подією timeupdate і метод setCurrentTime()     //
//  для встановлення часу після перезавантаження сторінки.             //
// Також не забуваємо перевіряти наявність данних,                     //
// коли читаєте з localStorage. Якщо в localStorage немає ключа,       //
// який ви намагаєтесь прочитати, метод getItem(key) поверне вам null. //
// //////////////////////////////////////////////////////////////////////


const vPlayer = document.getElementById('vimeo-player');
console.log('<<<<<<<<<<<<<<<<<<<played the video!>>>>>>>>>>>>>>>>>');

// --------------------------------------------
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(vPlayer);


