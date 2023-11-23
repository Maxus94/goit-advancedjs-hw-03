import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
export const API_URL = 'https://api.thecatapi.com/v1/';
export const API_BREEDS = 'breeds';
export const API_FUL_INFO = 'images';
export function fetchBreeds() {
  return fetch(`${API_URL}${API_BREEDS}`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error in breeds search');
      }
      const responseJSON = response.json();
      return responseJSON;
    })
    .catch(err => {
      //console.log(err);
      iziToast.show({
        title: 'Error',
        message: `${err}`,
        close: false,
        backgroundColor: 'red',
        messageColor: 'white',
        messageSize: 20,
        timeout: 0,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    });
}
export function fetchCatByBreed(breedId) {
  return fetch(
    `${API_URL}${API_FUL_INFO}/search?breed_ids=${breedId}&api_key=live_2Q9JZjMJI5bZojchvDz6dEbNb9glMqm8aJQNzpxhIaZPkxslhOWPtQNSOk8vrbah`
  )
    .then(response => {
      if (!response.ok) {
        throw new Error('Error in breeds search');
      }
      return response.json();
    })
    .catch(err => {
      //console.log(err);
      iziToast.show({
        title: 'Error',
        message: `${err}`,
        close: false,
        backgroundColor: 'red',
        messageColor: 'white',
        messageSize: 20,
        timeout: 0,
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      });
    });
}
