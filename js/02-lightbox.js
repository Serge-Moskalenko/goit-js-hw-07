import { galleryItems } from './gallery-items.js';
// Change code below this line

const refs = {
    divEl:document.querySelector('.gallery')
}

function createMarkup(e) {
    return e.map(ev => {

        return `
  <a class="gallery__item" href="${ev.original}">
    <img
      class="gallery__image"
      src="${ev.preview}"
      data-source="${ev.original}"
      alt='${ev.description}'
    />
  </a>
</div>`
    }).join('');
};

const markup = createMarkup(galleryItems);

refs.divEl.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery .gallery__item', {captionsData:'alt',captionDelay:250});


