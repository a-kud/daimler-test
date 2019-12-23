import axios from 'axios'

export const fetchMoovies = searchQuery => axios.get(
  `https://api.themoviedb.org/3/search/movie?page=1&include_adult=false&language=en-US&api_key=057dfa32a18eed0f2dc23dc2e80ed8a0&query=${searchQuery}`
)
  .then(response => response)
  .catch(error => error)
