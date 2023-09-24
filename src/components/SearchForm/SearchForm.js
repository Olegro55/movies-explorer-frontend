import "./SearchForm.css";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input name="search-input" className="search-form__input" placeholder="Фильм" />
      <button type="submit" className="search-form__button">Найти</button>
      <div className="search-form__short-film">
        <label className="search-form__short-film-switch">
          <input type="checkbox" className="search-form__switch" checked />
          <span className="search-form__slider search-form__slider_on"></span>
        </label>
        <p className="search-form__short-film-text">Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
