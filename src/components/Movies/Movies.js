import "./Movies.css";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const Movies = () => {
  return (
    <main className='movies'>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
      <button className='movies__more'>Ещё</button>
    </main>
  );
};

export default Movies;
