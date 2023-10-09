import { moviesApiConfig } from "./constants";

class MoviesApi {
  constructor({ baseUrl, headers }) {
    this._url = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    if (!res.ok)
      return Promise.reject(res);
    return res.json();
  }

  _request(endpoint, options) {
    return fetch(`${this._url}/${endpoint}`, options).then(this._checkResponse);
  }

  getMovies() {
    return this._request('', {
      method: 'GET',
      headers: this._headers
    });
  }
}

const moviesApi = new MoviesApi(moviesApiConfig);
export default moviesApi;