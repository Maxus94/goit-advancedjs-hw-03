import axios from 'axios';
import { fetchBreeds, fetchCatByBreed } from './cat-api';
import SlimSelect from 'slim-select';

//axios.defaults.headers.common['x-api-key'] = 'live_CYfDoS5dNeACSCwYtMK32XB821HsGAUlrTtg1vSBWMymimcVnHbbjgtqAnOT394U';

const breedsListSelect = document.querySelector('.breed-select');
const loadStatus = document.querySelector('.loader');
const errorStatus = document.querySelector('.error');
const descriptionDiv = document.querySelector('.cat-info');

//let breedID;
errorStatus.setAttribute('hidden', true);
loadStatus.setAttribute('hidden', true);

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
  descriptionDiv.innerHTML = '';
  errorStatus.setAttribute('hidden', true);
  breedsListSelect.setAttribute('hidden', true);
  loadStatus.removeAttribute('hidden');
  const breedID = evt.currentTarget.value;
  console.log(breedID);
  fetchCatByBreed(breedID).then(data => {    
    breedsListSelect.removeAttribute('hidden');
    loadStatus.setAttribute('hidden', true);
    //console.log(data[0].url);
    descriptionDiv.style.display = 'flex';
    descriptionDiv.style.gap = '20px';
    descriptionDiv.style.padding = '20px';
    descriptionDiv.innerHTML = `<img width="300" src="${data[0].url}" alt="${data[0].breeds[0].name}">
    <div><p>${data[0].breeds[0].name}</p>
    <p>${data[0].breeds[0].description}</p></div>`;
  }).catch(err => {
    console.log(err);
    errorStatus.removeAttribute('hidden');
    errorStatus.style.color = 'red';
  }
    );
}
function createMarkup(arr) {
  return arr.map(({ id, name }) => `<option value = ${id}>${name}</option>`);
}
