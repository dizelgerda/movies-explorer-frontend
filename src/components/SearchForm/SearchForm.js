import { useState } from 'react';
import "./SearchForm.css";

function SearchForm({ onSubmit }) {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({ ...data, [name]: value });
  }

  function handleChecked(e) {
    const { target: { name, checked } } = e;
    setData({ ...data, [name]: checked });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input type="text" name="request" className="search-form__input" placeholder="Фильм" onChange={handleChange} required/>
          <button type="submit" className="search-form__submit"></button>
          <div className="search-form__switch-container">
            <div className="switch">
              <input type="checkbox" name="isShort" className="switch__input" onChange={handleChecked} />
            </div>
            <label htmlFor="isShort" className="search-form__label">Короткометражки</label>
          </div>
        </form>
      </div>
    </section>
  );
}

export default SearchForm;
