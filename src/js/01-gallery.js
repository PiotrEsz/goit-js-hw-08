'use strict';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

const myGallery = document.querySelector('div.gallery');

createSimpleGalleryItems();

function createSimpleGalleryItems() {
  const items = galleryItems
    .map(
      image =>
        `<a class="gallery__item" href="${image.original}"><img class="gallery__image" src="${image.preview}" alt="${image.description}"/></a>`
    )
    .join('');
  myGallery.insertAdjacentHTML('beforeend', items);
}

const gallery = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
