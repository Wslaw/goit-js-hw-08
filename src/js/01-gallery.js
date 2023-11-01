// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';

// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";



console.log(galleryItems);

// --------------Сonnecting styles---------------------------
const itemStyle = document.querySelector("a");
itemStyle.classList.add("link");
const itemStyleLink = document.querySelector(".link")

// ------------------------------------------------------------

const galleryContainer = document.querySelector(".gallery");
const itemsMarkup = createGalleryItemsMarkup(galleryItems);


galleryContainer.insertAdjacentHTML("beforeend", itemsMarkup);

function createGalleryItemsMarkup(items) {
  return items
  .map(
    (item) =>
    `<li class = "gallery__item">
    <a class = "gallery__link" href ="${item.original}">
    <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}" />
        </a>
        </li>`
        )
        .join("");
      };


//  const lightbox = new SimpleLightbox(".gallery a", {
  //  captionsData: "alt",
  //  captionPosition: "top-right",
  //  captionDelay: 250,
  //  closeText: "",
  //  animationSpeed: 300,
  //  enableKeyboard: true,
  //  doubleTapZoom: 1.5,
  //  });
  
  
  
  let gallery = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionPosition: 'top',
      heightRatio: 0.8,
       showCounter: 0,

  // captionDelay: 250,
  //   closeText: "",
  //   showCounter: false,
  //   animationSpeed: 300,
  //   enableKeyboard: true,
  //   doubleTapZoom: 1.5,
  //   fadeSpeed: 250,
});


gallery.on("show.simplelightbox", function () {
itemStyleLink.style.display = "none";
});


gallery.on("closed.simplelightbox", function () {
  itemStyleLink.style.display = "inline-block";
  
});

