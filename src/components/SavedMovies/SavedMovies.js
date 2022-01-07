import './SavedMovies.css';

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import { useEffect, useState } from 'react';
import { MainApi } from '../../utils/MainApi';

function SavedMovies({ onError }) {
  const [results, setResults] = useState(null);
  const [savedMovies, setSavedMovies] = useState(null);

  useEffect(() => {
    getSavedMovies();
  }, [])

  function getSavedMovies() {
    setResults(null);
    MainApi.getMovies()
    .then((movies) => {
      if (movies.length) {
        setResults(movies);
      }
    })
    .catch((err) => err.then(({ message }) => onError(message)));
  }

  function deleteMovie(id) {
    MainApi.deleteMovie(id)
      .then(() => getSavedMovies())
      .catch((err) => err.then(({ message }) => onError(message)));
  }

  function findInName(name, request) {
    if (!name || !request) return 0;

    name = name.toLowerCase();
    request = request.toLowerCase();
    name = name.trim();
    request = request.trim();

    return name.indexOf(request) !== -1
  }

  function handleSearch(params) {
    const { request, isShort } = params;

    setResults(savedMovies.filter(({ duration, nameRU, nameEN }) => {

      if (isShort && duration > 40) return false;

      if (findInName(nameRU, request)) return true;
      if (findInName(nameEN, request)) return true;

      return false;
    }));
  }

  return (
    <>
      <SearchForm onSubmit={handleSearch} />
      {results ? (<MoviesCardList cards={results} onDelete={deleteMovie} />) : null}
    </>
  );
}

export default SavedMovies;
