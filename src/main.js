// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';
// Описаний у документації
import SimpleLightbox from 'simplelightbox';
// Додатковий імпорт стилів
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getPhotos } from './js/pixabay-api';

import { createMarkup } from './js/render-functions';

const ulEl = document.querySelector('.js-gallery');
const ulForm = document.querySelector('.js-search-form');
const loader = document.querySelector('.loader');

ulForm.addEventListener('submit', onFormSubmit);

function showLoader() {
  loader.classList.remove('is-hidden');
}

function hideLoader() {
  loader.classList.add('is-hidden');
}

function onFormSubmit(e) {
  e.preventDefault();

  ulEl.innerHTML = '';

  showLoader();

  const input = e.currentTarget.elements['user-search-query'].value.trim();

  if (!input) {
    hideLoader();
    return iziToast.error({
      title: 'Error',
      message: 'error',
    });
  }

  getPhotos(input)
    .then(res => {
      if (res.hits.length === 0) {
        return iziToast.error({
          title: 'Error',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      }
      ulEl.innerHTML = createMarkup(res.hits);
      lightbox.refresh();
    })
    .catch(console.log)
    .finally(() => hideLoader());

  e.currentTarget.reset();
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
