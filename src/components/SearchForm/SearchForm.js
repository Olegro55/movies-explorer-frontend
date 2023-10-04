import "./SearchForm.css";

const SearchForm = ({ handleSearch, shortsSwitchOn, handleShortsSwitch, prompt, handleInput }) => {

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(prompt);
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        name="search-input"
        className="search-form__input"
        placeholder="Фильм"
        value={prompt}
        onChange={handleInput}
      />
      <button type="submit" className="search-form__button">Найти</button>
      <div className="search-form__short-film">
        <label className="search-form__short-film-switch">
          <input type="checkbox" id="switch" className="search-form__switch" checked={shortsSwitchOn} onChange={handleShortsSwitch} />
          <span className={`search-form__slider${shortsSwitchOn ? " search-form__slider_on" : ""}`}></span>
        </label>
        <p className="search-form__short-film-text">Короткометражки</p>
      </div>
    </form>
  );
};

export default SearchForm;
