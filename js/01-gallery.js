import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`).join('');
galleryList.insertAdjacentHTML("beforeend", markup);

galleryList.addEventListener("click", onClick)

function onClick(evt) {
    if (evt.target === evt.currentTarget) {
        return;
    }

    evt.preventDefault();
    const modal = basicLightbox.create(`<div class="modal"><img src="${evt.target.dataset.source}" alt="${evt.target.alt}" /></div>`);
    modal.show();
}