import { fetchBreeds, fetchCatByBreed } from './cat-api';
//import SlimSelect from 'slim-select';
//import '../node_modules/slim-select/dist/slimselect.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const breedsListSelect = document.querySelector('.breed-select');
const loadStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
const descriptionDiv = document.querySelector('.cat-info');

breedsListSelect.insertAdjacentHTML(
  'afterend',
  '<div class="loader-animation"></div>'
);

const spiner = document.querySelector('.loader-animation');

const arr = fetchBreeds()
  .then(data => {
    spiner.style.display = 'none';
    breedsListSelect.innerHTML = createMarkup(data);
    breedsListSelect.classList.remove('hidden');
  })
  .catch(err => {
    spiner.style.display = 'none';
    iziToast.show({
      title: 'Error',
      message: `Oops! Something went wrong! Try reloading the page!`,
      close: false,
      backgroundColor: 'red',
      messageColor: 'white',
      messageSize: 20,
      timeout: 0,
      position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
    });
  });

breedsListSelect.addEventListener('input', selectBreedHandler);
function selectBreedHandler(evt) {
  iziToast.destroy();
  descriptionDiv.innerHTML = '';
  errorStatus.setAttribute('hidden', true);
  breedsListSelect.setAttribute('hidden', true);
  loadStatus.removeAttribute('hidden');
  spiner.style.display = 'block';
  const breedID = evt.currentTarget.value;
  fetchCatByBreed(breedID)
    .then(data => {
      breedsListSelect.removeAttribute('hidden');
      loadStatus.setAttribute('hidden', true);
      spiner.style.display = 'none';
      descriptionDiv.style.display = 'flex';
      descriptionDiv.style.gap = '20px';
      descriptionDiv.style.padding = '20px';
      descriptionDiv.innerHTML = `<img width="300" src="${data[0].url}" alt="${data[0].breeds[0].name}">
    <div><p>${data[0].breeds[0].name}</p>
    <p>${data[0].breeds[0].description}</p></div>`;
    })
    .catch(err => {
      iziToast.show({
        title: 'Error',
        message: `Oops! Something went wrong! Try reloading the page!`,
        close: false,
        backgroundColor: 'red',
        messageColor: 'white',
        messageSize: 20,
        timeout: 0,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    });
}
function createMarkup(arr) {
  return arr.map(({ id, name }) => `<option value = ${id}>${name}</option>`);
}
