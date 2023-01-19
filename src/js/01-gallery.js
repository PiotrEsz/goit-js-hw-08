import { galleryItems } from './gallery-items.js';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('div.gallery');

const items = galleryItems
  .map(
    image =>
      `<div class="gallery__item"> 
            <a class="gallery__link" href="${image.original}">
                <img class="gallery__image"
                src="${image.preview}"
                data-source="${image.original}"
                alt="${image.description}"
                />
            </a>
    </div>`
  )
  .join('');
console.log(galleryItems);

gallery.insertAdjacentHTML('afterbegin', items);

const largeImage = e => {
  const originalImage = e.target.dataset.source;
  basicLightbox
    .create(`<img  src="${originalImage}">	`, {
      onShow: instance => {
        document.addEventListener('keydown', event => {
          if (event.key === 'Escape') {
            instance.close();
          }
        });
      },
    })
    .show();
  e.preventDefault();
};

gallery.addEventListener('click', largeImage);
