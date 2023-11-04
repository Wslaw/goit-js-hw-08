// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const refs = {
  galleryContainer: document.querySelector('.gallery'),
  itemStyle: document.querySelector('a'),
};


const itemsMarkup = createGalleryItemsMarkup(galleryItems);
refs.galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


function createGalleryItemsMarkup(items) {
  return items
    .map(
      item =>
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
    .join('');
};

let gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'top',
  heightRatio: 0.8,
  showCounter: 0,
  nav: true,
  close: false,
});

// --------------Сonnecting styles---------------------------
refs.itemStyle.classList.add('link');
const itemStyleLink = document.querySelector('.link');

gallery.on('show.simplelightbox', function () {
  itemStyleLink.style.display = 'none';
});

gallery.on('closed.simplelightbox', function () {
  itemStyleLink.style.display = 'block';
});
// ------------------------------------------------------------

