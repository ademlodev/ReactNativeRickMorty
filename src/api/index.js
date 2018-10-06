import axios from "axios";

// DOC https://rickandmortyapi.com/
const BASE_URL = "https://rickandmortyapi.com/api";

export function configureAxios() {
  axios.defaults.baseURL = BASE_URL;
}

export function fetchEpisodesList() {
  const url = "/episode";
  return axios.get(url);
}

export function fetchEipisodeCharacters(id) {
  const url = `/episode/${id}`;
  let characters = new Array();
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then(result => {
        characters = result.data.characters.map(fetchCharacter);
        Promise.all(characters).then(result => {
          const data = result.map(internalData => internalData.data);
          resolve(data);
        });
      })
      .catch(err => {
        reject(err);
      });
  });
}

export function fetchCharacter(url) {
  return axios.get(url);
}
