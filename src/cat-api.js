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
      console.log(responseJSON);
      return responseJSON;
    })
    .catch(err => console.log(err));
}
//const MY_API_KEY='live_CYfDoS5dNeACSCwYtMK32XB821HsGAUlrTtg1vSBWMymimcVnHbbjgtqAnOT394U';
export function fetchCatByBreed(breedId) {
    
    //https://api.thecatapi.com/v1/images/search?breed_ids=ідентифікатор_породи
        //return (fetch(`//https://api.thecatapi.com/v1/images/search?api_key=${MY_API_KEY}&breed_ids=${breedId}`)
      return (fetch(`${API_URL}${API_FUL_INFO}/search?breed_ids=${breedId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Error in breeds search');
        }
        return response.json();
      })
      .catch(err => console.log(err))
  );
}
