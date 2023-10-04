import { useEffect, useState } from "react";

import "./Movies.css";

import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import MoviesCard from "../MoviesCard/MoviesCard";

import moviesApi from '../../utils/MoviesApi.js';
import { api } from '../../utils/MainApi.js';

import { paginationConfig } from '../../utils/constants'

const Movies = () => {
  const [prompt, setPrompt] = useState('');
  const [onlyShorts, setOnlyShorts] = useState(false);
  const [searchError, setSearchError] = useState(false);
  const [noPrompt, setNoPrompt] = useState(false);
  const [noMoviesFound, setNoMoviesFound] = useState(false);
  const [searchInProcess, setSearchInProcess] = useState(false);
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [initCards, setinitCards] = useState(0);
  const [cardsPerPage, setCardsPerPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (localStorage.getItem('prompt') === null) localStorage.setItem('prompt', '');
    if (localStorage.getItem('onlyShorts') === null) localStorage.setItem('onlyShorts', false);
    if (localStorage.getItem('movies') === null) localStorage.setItem('movies', JSON.stringify([]));

    setPrompt(localStorage.getItem('prompt'));
    const onlyShorts = JSON.parse(localStorage.getItem('onlyShorts'));
    setOnlyShorts(onlyShorts);
    setMovies(JSON.parse(localStorage.getItem('movies')));
    reloadSavedMovies()
      .then(() => {
        filterShorts(onlyShorts);
      });
  }, []);

  useEffect(() => {
    calculateWidth()
    window.addEventListener("resize", calculateWidth);
    return () => {
        window.removeEventListener("resize", calculateWidth);
    };
  }, [])

  function reloadSavedMovies() {
    return api.getSavedMovies()
      .then((data) => {
        setSavedMovies(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function filterShorts(onlyShorts) {
    let foundMovies = JSON.parse(localStorage.getItem('movies'));
    if (onlyShorts)
      foundMovies = foundMovies.filter(movie => movie.duration <= 40);
    setNoMoviesFound(foundMovies.length === 0);
    setMovies(foundMovies);
    setCurrentPage(0);
  }

  function handleInput(e) {
    setPrompt(e.target.value);
  }

  function handleShortsSwitch(e) {
    setOnlyShorts(e.target.checked);
    localStorage.setItem('onlyShorts', e.target.checked);
    filterShorts(e.target.checked);
  }

  function handleSearch() {
    setMovies([]);
    setSearchError(false);
    setNoPrompt(false);
    setNoMoviesFound(false);

    if (!prompt) {
      setNoPrompt(true);
      localStorage.setItem('prompt', '');
      localStorage.setItem('movies', JSON.stringify([]));
    }
    else {
      setSearchInProcess(true);
      localStorage.setItem('prompt', prompt);
      moviesApi.getMovies()
        .then((data) => {
          const foundMovies = data.filter((movie) => {
            const nameRuEn = `${movie.nameRU} ${movie.nameEN}`.toLowerCase();
            return nameRuEn.includes(prompt.toLowerCase())
          });
          localStorage.setItem('movies', JSON.stringify(foundMovies));
          filterShorts(onlyShorts);
        })
        .catch(() => {
          setSearchError(true);
        })
        .finally(() => {
          setSearchInProcess(false);
        });
    }
  }

  function handleSave(movie) {
    api.saveMovie(movie)
      .then(() => {
        reloadSavedMovies()
          .then(() => {
            filterShorts(onlyShorts);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleDelete(movie) {
    api.deleteMovie(movie)
      .then(() => {
        reloadSavedMovies()
          .then(() => {
            filterShorts(onlyShorts);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function calculateWidth() {
    let screenWidth = window.innerWidth;
    if (screenWidth > 1180)
      screenWidth = 1181;
    else if (screenWidth > 950)
      screenWidth = 1180;
    else if (screenWidth > 767)
      screenWidth = 950;
    else
      screenWidth = 767;

    setinitCards(paginationConfig[screenWidth][0]);
    setCardsPerPage(paginationConfig[screenWidth][1]);
  }

  function calculateCardsAmount() {
    let newAmount = initCards + currentPage * cardsPerPage;
    if (newAmount >= movies.length)
      newAmount = movies.length;
    return newAmount;
  }

  function showMoreCards() {
    setCurrentPage(currentPage + 1);
  }

  const displayedMovies = movies.slice(0, calculateCardsAmount());

  const moviesCards = displayedMovies.map((movie) => {
    const savedMovieData = savedMovies.find(savedMovie => savedMovie.movieId === movie.id)
    if (savedMovieData !== undefined) {
      movie.owner = savedMovieData.owner;
      movie._id = savedMovieData._id;
    }
    else {
      delete movie.owner;
      delete movie._id;
    }

    return (
      <MoviesCard
        key={movie.id}
        movie={movie}
        isFromSearch={true}
        onSave={handleSave}
        onDelete={handleDelete}
      />
    );
  })

  return (
    <main className='movies'>
      <SearchForm handleSearch={handleSearch} shortsSwitchOn={onlyShorts} handleShortsSwitch={handleShortsSwitch} prompt={prompt} handleInput={handleInput} />
      <Preloader hidden={!searchInProcess} />
      <p className={`movies__message${searchError ? "" : " movies__hidden"}`}>Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз</p>
      <p className={`movies__message${noPrompt ? "" : " movies__hidden"}`}>Нужно ввести ключевое слово.</p>
      <p className={`movies__message${noMoviesFound ? "" : " movies__hidden"}`}>Ничего не найдено.</p>
      <MoviesCardList>
        {moviesCards}
      </MoviesCardList>
      <button className={`movies__more${displayedMovies.length >= movies.length ? " movies__hidden" : ""}`} onClick={showMoreCards}>Ещё</button>
    </main>
  );
};

export default Movies;
