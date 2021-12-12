import "./SearchForm.css";

function SearchForm() {
  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form">
          <input type="text" className="search-form__input" placeholder="Фильм" />
          <button type="submit" className="search-form__submit"></button>
          <div className="search-form__switch-container">
            <div className="switch">
              {/* <div className="switch__button"></div> */}
              <input type="checkbox" name="short-films" className="switch__input" />
            </div>
            <label for="short-films" className="search-form__label">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
