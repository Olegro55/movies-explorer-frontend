import SearchForm from '../SearchForm/SearchForm';
import Preloader from '../Preloader/Preloader';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

const SavedMovies = () => {
  return (
    <main>
      <SearchForm />
      <Preloader />
      <MoviesCardList />
    </main>
  );
};

export default SavedMovies;
 