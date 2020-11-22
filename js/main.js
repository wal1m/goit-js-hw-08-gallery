import galleryImg from '../gallery-items.js';

const listRef = document.querySelector('.js-gallery');
const modalRef = document.querySelector('.js-lightbox');
const urlImgRef = document.querySelector('.lightbox__image');
const buttonCloseRef = modalRef.querySelector('button[data-action="close-lightbox"]',);
const overlayRef = modalRef.querySelector('.lightbox__overlay');
// console.log(urlImgRef);

const getImgRef = galleryImg
  .map(
    ({ preview, original, description }) =>
      `<li class="gallery__item">
      <a
       class="gallery__link"
       href="${original}">
      <img
       class="gallery__image"
       src="${preview}"
       data-source="${original}"
       alt="${description}"
           />
         </a>
       </li>`,
  )
  .join('');
listRef.insertAdjacentHTML('beforeend', getImgRef);

listRef.addEventListener('click', onImgClick);

function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  // console.log('IMG');
  const imgUrl = event.target.dataset.source;
  modalRef.classList.add('is-open');
  urlImgRef.setAttribute('src', imgUrl);
  urlImgRef.setAttribute('alt', event.target.alt);

  // console.log(imgUrl);
}
buttonCloseRef.addEventListener('click', closeModal);
overlayRef.addEventListener('click', closeModal);

function closeModal() {
  modalRef.classList.remove('is-open');
  urlImgRef.setAttribute('src', '');
}
