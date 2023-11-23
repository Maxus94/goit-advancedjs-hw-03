import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';

axios.defaults.headers.common['x-api-key'] =
  'live_CYfDoS5dNeACSCwYtMK32XB821HsGAUlrTtg1vSBWMymimcVnHbbjgtqAnOT394U';

const breedsListSelect = document.querySelector('.breed-select');
const loadStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
//let breedID;
loadStatus.setAttribute('hidden', true);
errorStatus.setAttribute('hidden', true);

const arr = fetchBreeds()
  .then(data => {
    breedsListSelect.innerHTML = createMarkup(data);
  })
  .catch(err => {
    errorStatus.removeAttribute('hidden');
    console.log(err);
  });

breedsListSelect.addEventListener('input', selectBreedHandler);
function selectBreedHandler(evt) {
  breedsListSelect.setAttribute('hidden', true);
  loadStatus.removeAttribute('hidden');
  const breedID = evt.currentTarget.value;
  console.log(breedID);
  fetchCatByBreed(breedID).then(data => {
    breedsListSelect.removeAttribute('hidden');
    loadStatus.setAttribute('hidden', true);
    console.log(data);
  });
}
function createMarkup(arr) {
  return arr.map(({ id, name }) => `<option value = ${id}>${name}</option>`);
}
