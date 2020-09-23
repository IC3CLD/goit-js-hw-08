{/* <li class="gallery__item">
  <a
    class="gallery__link"
    href="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
  >
    <img
      class="gallery__image"
      src="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg"
      data-source="https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg"
      alt="Tulips"
    />
  </a>
</li> */}

import galleryItems from './gallery-items.js';
const list = document.querySelector('.js-gallery');
const div = document.querySelector(`.js-lightbox`);
const modalImage = document.querySelector(`.lightbox__image`);
const closeBtn = document.querySelector(`.lightbox__button`);

console.log(galleryItems);

galleryItems.map(item => {
    const img = document.createElement(`img`);
    img.classList.add(`gallery__image`);
    img.src = item.preview;
    img.setAttribute(`data-source`, item.original);
    img.alt = item.description;

    const link = document.createElement(`a`);
    link.classList.add(`gallery__link`);
    link.href = item.original;

    link.append(img);

    const li = document.createElement(`li`);
    li.classList.add(`gallery__li`);
    li.append(link);

    list.append(li);
})

list.addEventListener(`click`, (e) => {
   e.preventDefault();
   console.log(e.target);
   const modalLink = e.target.dataset.source;
   div.classList.add(`is-open`);
   modalImage.src = modalLink;
})

closeBtn.addEventListener(`click`, () => {
    div.classList.remove(`is-open`);
    modalImage.src =``;
})