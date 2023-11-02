// //////////////////////////////////////////////////////////////////////
// В завданні 2 домашньої роботи уважно читаємо ТЗ,                    //
// щоб правильно використати потрібні методи бібліотеки,               //
//  а саме метод on() з подією timeupdate і метод setCurrentTime()     //
//  для встановлення часу після перезавантаження сторінки.             //
// Також не забуваємо перевіряти наявність данних,                     //
// коли читаєте з localStorage. Якщо в localStorage немає ключа,       //
// який ви намагаєтесь прочитати, метод getItem(key) поверне вам null. //
// //////////////////////////////////////////////////////////////////////

const products = { name: 'Radar', price: 1300, quantity: 4 };

localStorage.setItem('Test_key', JSON.stringify(products));
// localStorage.setItem("Test_key", "{products}");

console.log(JSON.parse(localStorage.getItem('Test_key')));













// *****************************************
// localStorage.setItem("Test_key", [1,2,3,1,4,5,4,5,6,7]);

// const vPlayer = document.getElementById('vimeo-player');

// // --------------------------------------------
// import Player from '@vimeo/player';
// import throttle from 'lodash.throttle';

// const player = new Player(vPlayer);
// const onPlay = require('lodash.throttle');
// // console.log(onPlay);

// console.log(localStorage.getItem('Test_key'));
// // localStorage.removeItem();
// // localStorage.clear();


// const onPlay = function(data) {
//     // const currentTime = player.getCurrentTime()
//     // console.log(currentTime);
//     console.log('<played the video!>>>>>>>>>>>>>>>>>');
//     // data is an object containing properties specific to that event
// // console.log(timeupdate);
// };

// // player.on('timeupdate', onPlay);