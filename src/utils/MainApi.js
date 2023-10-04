import { mainApiConfig } from "./constants";

class Auth {
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

  register(data) {
    return this._request('signup', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }

  authorize({ email, password }) {
    return this._request('signin', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        email: email,
        password: password,
      })
    });
  }

  checkToken(token) {
    return this._request('users/me', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });
  }
}

class Api {
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
    options.headers['Authorization'] = `Bearer ${localStorage.getItem("token")}`;
    return fetch(`${this._url}/${endpoint}`, options).then(this._checkResponse);
  }

  setUserInfo(data) {
    return this._request('users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify(data)
    });
  }
  
  saveMovie(movie) {
    return this._request('movies', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify(movie)
    });
  }

  deleteMovie(movie) {
    return this._request(`movies/${movie._id}`, {
      method: 'DELETE',
      headers: this._headers
    });
  }

  getSavedMovies() {
    return this._request('movies', {
      method: 'GET',
      headers: this._headers
    });
  }
}

export const auth = new Auth(mainApiConfig);
export const api = new Api(mainApiConfig);