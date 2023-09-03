import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryList = document.querySelector('.gallery');

const markup = galleryItems.map(item => `<li class="gallery__item">
  <a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      data-source="${item.original}"
      alt="${item.description}"
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
    const instance = basicLightbox.create(`<img src="${evt.target.dataset.source}" alt="${evt.target.alt}" />`);
    instance.show();
}