import { galleryItems } from './gallery-items.js';

const refs = {
    divEl:document.querySelector('.gallery')
}

function createMarkup(e) {
    return e.map(ev => {

        return `<div class="gallery__item">
  <a class="gallery__link" href="${ev.original}">
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

refs.divEl.addEventListener('click', onClick);

function onClick(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    };
    const instance = basicLightbox.create(`
    
    <img src=${e.target.dataset.source}>`,{
       onShow: (instance) => { window.addEventListener('keydown', listener) },

       onClose: (instance) => { window.removeEventListener('keydown', listener) }
    } 
    );
    instance.show();
    
    function listener(e) {
    if (e.code === 'Escape') {
        instance.close()
    }
}
};