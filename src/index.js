import axios from "axios";

axios.defaults.headers.common["x-api-key"] = "live_CYfDoS5dNeACSCwYtMK32XB821HsGAUlrTtg1vSBWMymimcVnHbbjgtqAnOT394U";

const API_URL = 'https://api.thecatapi.com/v1/breeds'

function fetchBreeds(){
    return fetch(`${API_URL}`)
    .then((data) => data.json())    
    .catch(err => console.log(err))    
}

// .then(arr => arr.forEach(element => {
// console.log(element.name);
// }));
const arr = fetchBreeds()
.then(data => console.log(data))
.catch(err => console.log(err));