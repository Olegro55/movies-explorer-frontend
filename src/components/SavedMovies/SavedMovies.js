import { useEffect, useState } from "react";

import "./SavedMovies.css";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from "../MoviesCard/MoviesCard";

import { api } from '../../utils/MainApi.js';

const SavedMovies = () => {
  const [prompt, setPrompt] = useState('');
  const [onlyShorts, setOnlyShorts] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [noPrompt, setNoPrompt] = useState(false);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.getSavedMovies()
      .then((data) => {
        localStorage.setItem('savedMovies', JSON.stringify(data));
        setMovies(data);
      })
      .catch(() => {
        setSearchError(true);
      });
  }, [])

  function filterMovies(prompt, onlyShorts) {
    let savedMovies = JSON.parse(localStorage.getItem('savedMovies'));
    savedMovies = savedMovies.filter((movie) => {
      const nameRuEn = `${movie.nameRU} ${movie.nameEN}`.toLowerCase();
      return nameRuEn.includes(prompt.toLowerCase())
    });
    if (onlyShorts)
      savedMovies = savedMovies.filter(movie => movie.duration <= 40);
    setNoMoviesFound(savedMovies.length === 0);
    setMovies(savedMovies);
  }

  function handleInput(e) {
    setPrompt(e.target.value);
  }

  function handleShortsSwitch(e) {
    setOnlyShorts(e.target.checked);
    localStorage.setItem('savedOnlyShorts', e.target.checked);
    filterMovies(prompt, e.target.checked);
  }

  function handleSearch() {
    setSearchError(false);
    setNoPrompt(false);
    setNoMoviesFound(false);

    localStorage.setItem('savedPrompt', prompt);
    filterMovies(prompt, onlyShorts);
  }

  function handleDelete(movie) {
    api.deleteMovie(movie)
      .then((data) => {
        let currentMovies = JSON.parse(localStorage.getItem('savedMovies'));
        currentMovies = currentMovies.filter(m => m.movieId !== data.movieId);
        localStorage.setItem('savedMovies', JSON.stringify(currentMovies));
        filterMovies(prompt, onlyShorts);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const moviesCards = movies.map((movie) => {
    return (
      <MoviesCard
        key={movie.movieId}
        movie={movie}
        isFromSearch={false}
        onDelete={handleDelete}
      />
    );
  })

  return (
    <main className='saved-movies'>
      <SearchForm handleSearch={handleSearch} shortsSwitchOn={onlyShorts} handleShortsSwitch={handleShortsSwitch} prompt={prompt} handleInput={handleInput} />
      <p className={`saved-movies__message${searchError ? "" : " saved-movies__hidden"}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      <p className={`saved-movies__message${noPrompt ? "" : " saved-movies__hidden"}`}>Нужно ввести ключевое слово.</p>
      <p className={`saved-movies__message${noMoviesFound ? "" : " saved-movies__hidden"}`}>Ничего не найдено.</p>
      <MoviesCardList>
        {moviesCards}
      </MoviesCardList>
    </main>
  );
};

export default SavedMovies;
