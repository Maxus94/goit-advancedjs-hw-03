export const API_URL = 'https://api.thecatapi.com/v1/';
export const API_BREEDS = 'breeds';
export const API_FUL_INFO = 'images';
export function fetchBreeds() {
  return fetch(`${API_URL}${API_BREEDS}`).then(response => {
    if (!response.ok) {
      throw new Error('Error in breeds search');
    }
    const responseJSON = response.json();
    return responseJSON;
  });
}
export function fetchCatByBreed(breedId) {
  return fetch(
    `${API_URL}${API_FUL_INFO}/search?breed_ids=${breedId}&api_key=live_2Q9JZjMJI5bZojchvDz6dEbNb9glMqm8aJQNzpxhIaZPkxslhOWPtQNSOk8vrbah`
  ).then(response => {
    if (!response.ok) {
      throw new Error('Error in breed data');
    }
    return response.json();
  });
}
