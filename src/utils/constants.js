export const mainApiConfig = {
  //baseUrl: 'https://api.movies-front.nomoredomainsicu.ru',
  baseUrl: 'http://localhost:3030',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const moviesApiConfig = {
  baseUrl: 'https://api.nomoreparties.co/beatfilm-movies',
  headers: {
    'Content-Type': 'application/json'
  }
};

export const  paginationConfig = {
  1181: [16, 4],
  1180: [12, 3],
  950: [8, 2],
  767: [5, 2],
}